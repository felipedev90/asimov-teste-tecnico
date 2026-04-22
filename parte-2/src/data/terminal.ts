export type CodeToken = [color: string, text: string]
export type CodeLine  = CodeToken[]

export const SYNTAX = {
  keyword: '#FF7B72',
  string:  '#F5C518',
  fn:      '#D2A8FF',
  module:  '#79C0FF',
  comment: '#6E7681',
  fg:      '#FAFAFA',
} as const

const { keyword: kw, string: str, fn, module: mod, comment: cmt, fg } = SYNTAX

export const CODE_LINES: CodeLine[] = [
  [[kw, 'from '], [mod, 'openai '], [kw, 'import '], [fg, 'OpenAI']],
  [[kw, 'import '], [mod, 'pandas '], [kw, 'as '], [fg, 'pd']],
  [],
  [[fg, 'client = '], [fn, 'OpenAI'], [fg, '()']],
  [[fg, 'df = pd.'], [fn, 'read_csv'], [fg, '('], [str, '"vendas.csv"'], [fg, ')']],
  [],
  [[kw, 'def '], [fn, 'analisar'], [fg, '(df):']],
  [[fg, '    resp = client.chat.'], [fn, 'completions'], [fg, '(']],
  [[cmt, '        # analisa tendências com IA']],
  [[fg, '        model='], [str, '"gpt-4o"'], [fg, ', messages=msgs)']],
  [[kw, '    return '], [fg, 'resp.choices[0].message']],
]

export interface OutputBar {
  label: string
  pct:   number
  val:   string
}

export const OUTPUT_BARS: OutputBar[] = [
  { label: 'Q1 2026', pct: 68,  val: 'R$ 342k' },
  { label: 'Q2 2026', pct: 84,  val: 'R$ 418k' },
  { label: 'Q3 2026', pct: 100, val: 'R$ 501k' },
]