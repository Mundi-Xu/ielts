export interface VocabularyItem {
  id: number
  spellError: boolean
  spellValue: string
  showSource: boolean
  word: string[]
  pos: string
  meaning: string
  example: string
  extra: string
}

export interface VocabularyCategory {
  label: string
  audio: string
  groupCount: number
  wordCount: number
  words: VocabularyItem[][]
}

export interface VocabularyData {
  [key: string]: VocabularyCategory
}