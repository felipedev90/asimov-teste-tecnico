import type { CodeLine } from "@/types/hero";

export const terminalCode: readonly CodeLine[] = [
  {
    number: 1,
    tokens: [
      { type: "keyword", text: "import" },
      { type: "plain", text: " " },
      { type: "identifier", text: "numpy" },
      { type: "plain", text: " " },
      { type: "keyword", text: "as" },
      { type: "plain", text: " " },
      { type: "identifier", text: "np" },
    ],
  },
  {
    number: 2,
    tokens: [
      { type: "keyword", text: "import" },
      { type: "plain", text: " " },
      { type: "identifier", text: "pandas" },
      { type: "plain", text: " " },
      { type: "keyword", text: "as" },
      { type: "plain", text: " " },
      { type: "identifier", text: "pd" },
    ],
  },
  {
    number: 3,
    tokens: [
      { type: "keyword", text: "import" },
      { type: "plain", text: " " },
      { type: "identifier", text: "tensorflow" },
      { type: "plain", text: " " },
      { type: "keyword", text: "as" },
      { type: "plain", text: " " },
      { type: "identifier", text: "tf" },
    ],
  },
  { number: 4, tokens: [] },
  {
    number: 5,
    tokens: [{ type: "comment", text: "# Rede neural simples" }],
  },
  {
    number: 6,
    tokens: [
      { type: "identifier", text: "model" },
      { type: "plain", text: " = " },
      { type: "function", text: "Sequential" },
      { type: "plain", text: "()" },
    ],
  },
  { number: 7, tokens: [] },
  {
    number: 8,
    tokens: [{ type: "comment", text: "# Treinando o modelo" }],
  },
  {
    number: 9,
    tokens: [
      { type: "identifier", text: "model" },
      { type: "plain", text: "." },
      { type: "function", text: "fit" },
      { type: "plain", text: "(" },
      { type: "identifier", text: "X_train" },
      { type: "plain", text: ", " },
      { type: "identifier", text: "y_train" },
      { type: "plain", text: ")" },
    ],
  },
  { number: 10, tokens: [] },
  {
    number: 11,
    tokens: [
      { type: "keyword", text: "def" },
      { type: "plain", text: " " },
      { type: "function", text: "predict" },
      { type: "plain", text: "(" },
      { type: "identifier", text: "data" },
      { type: "plain", text: "):" },
    ],
  },
  {
    number: 12,
    tokens: [
      { type: "plain", text: "    " },
      { type: "keyword", text: "return" },
      { type: "plain", text: " " },
      { type: "identifier", text: "model" },
      { type: "plain", text: "." },
      { type: "function", text: "predict" },
      { type: "plain", text: "(" },
      { type: "identifier", text: "data" },
      { type: "plain", text: ")" },
    ],
  },
] as const;