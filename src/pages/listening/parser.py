"""
雅思听力语料库解析器
用于将JSON格式的考点词数据转换为更易维护的格式
支持考点词的解析和导出
"""

import json
from pathlib import Path
from typing import List, Dict, Any


class IELTSListeningParser:
    """雅思听力考点词解析器"""
    
    def __init__(self, directory: Path = None):
        """初始化解析器"""
        self.directory = directory or Path(__file__).parent.absolute()
        self.input_path = self.directory / 'listening179.json'
        self.output_path = self.directory / 'listening_words.js'
        
        # 定义考点词分类信息
        self.categories = [
            {
                'title': '听力核心考点词',
                'define': '在听力考试中高频出现的词汇',
                'require': '必须熟练掌握词义、同义词及在真题中的命题方式',
                'description': '这些词汇在雅思听力考试中出现频率最高，是提高听力成绩的关键。需要熟练掌握词义、同义替换及在真题中的命题方式。'
            }
        ]
    
    def parse(self) -> List[Dict[str, Any]]:
        """
        解析JSON文件中的考点词数据
        
        Returns:
            解析后的考点词数据列表
        """
        # 读取JSON数据
        with open(self.input_path, 'r', encoding='utf-8') as f:
            raw_data = json.load(f)
        
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
        
        # 转换数据格式
        for item in raw_data:
            # 添加到对应分类
            all_data[0]['words'].append([
                item['index'],         # 排名
                item['word'],          # 考点词
                [item['type']] if item['type'] else [],  # 词性
                [item['meaning']],     # 中文词义
                item['replace'],       # 同义替换
                ''                     # 备注
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
        print("开始解析雅思听力考点词...")
        data = self.parse()
        self.export_to_js(data)
        print(f"解析完成！已导出到: {self.output_path}")


def main():
    """主函数"""
    parser = IELTSListeningParser()
    parser.run()


if __name__ == '__main__':
    main()