"""
雅思阅读考点词解析器
用于将Markdown格式的考点词表格转换为JavaScript数据文件
支持三类考点词的解析和导出
"""

import json
from pathlib import Path
import re
from typing import List, Dict, Any


class IELTSReadingParser:
    """雅思阅读考点词解析器"""
    
    def __init__(self, directory: Path = None):
        """初始化解析器"""
        self.directory = directory or Path(__file__).parent.absolute()
        self.file_path = self.directory / '538keyword.md'
        self.output_path = self.directory / 'reading538words.js'
        
        # 定义三类考点词的分类信息
        self.categories = [
            {
                'title': '第 1 类考点词',
                'define': '当其出现 90% 概率考察',
                'require': '滚瓜烂熟',
                'description': '核心高频考点词，必须熟练掌握词义、同义词及在真题中的命题方式。这些词汇在考试中出现频率最高，是提高阅读成绩的关键。'
            },
            {
                'title': '第 2 类考点词',
                'define': '当其出现 60% 概率考察',
                'require': '熟记 10 遍以上',
                'description': '重要考点词，需要熟练掌握词义、同义词及在真题中的命题方式。这些词汇在考试中出现频率较高，是提升阅读分数的重要保障。'
            },
            {
                'title': '第 3 类考点词',
                'define': '阅读中被考察过的单词，是阅读的考点词',
                'require': '熟记 5 遍以上',
                'description': '次重要考点词，需要掌握词义、同义词及在真题中的命题方式。这些词汇在考试中也有出现，掌握它们有助于进一步提高成绩。'
            }
        ]
    
    def parse(self) -> List[Dict[str, Any]]:
        """
        解析Markdown文件中的考点词数据
        
        Returns:
            解析后的考点词数据列表
        """
        # 初始化数据结构
        all_data = []
        for category in self.categories:
            all_data.append({
                'title': category['title'],
                'define': category['define'],
                'require': category['require'],
                'description': category['description'],
                'words': []
            })
        
        index = -1
        word_no = 0
        word_regex = re.compile(r',|，')
        
        # 读取并解析文件
        with open(self.file_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                    
                # 检测表格开始标记
                if line.startswith('|---'):
                    index += 1
                    continue
                
                # 解析表格行数据
                parts = line.split('|')
                if len(parts) >= 5 and parts[0]:
                    word_no += 1
                    parts = [p.strip() for p in parts]
                    
                    # 解析同义替换词
                    replaces = [s.strip() for s in word_regex.split(parts[4]) if s.strip()]
                    
                    # 解析备注信息
                    remark = ''
                    if len(parts) == 6:
                        remark = parts[5]
                    
                    # 解析词性和中文词义
                    pos = [p.strip() for p in parts[2].split('/') if p.strip()] if parts[2] else []
                    meanings = [m.strip() for m in parts[3].split('/') if m.strip()] if parts[3] else []
                    
                    # 添加到对应分类
                    all_data[index]['words'].append([
                        word_no,           # 排名
                        parts[1],          # 考点词
                        pos,               # 词性
                        meanings,          # 中文词义
                        replaces,          # 同义替换
                        remark             # 备注
                    ])
        
        return all_data
    
    def export_to_js(self, data: List[Dict[str, Any]]) -> None:
        """
        将解析后的数据导出为JavaScript文件
        
        Args:
            data: 解析后的考点词数据
        """
        json_str = json.dumps(data, ensure_ascii=False, indent=2)
        js_content = f"export default {json_str}"
        
        with open(self.output_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
    
    def run(self) -> None:
        """执行完整的解析和导出流程"""
        print("开始解析雅思阅读考点词...")
        data = self.parse()
        self.export_to_js(data)
        print(f"解析完成！已导出到: {self.output_path}")


def main():
    """主函数"""
    parser = IELTSReadingParser()
    parser.run()


if __name__ == '__main__':
    main()