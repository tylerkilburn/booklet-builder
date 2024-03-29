import { JSX } from "solid-js/jsx-runtime"

export interface IBooklet {
  title?: ""
  pages: IBookletPage[]
}

export interface IBookletPage {
  isBlank?: boolean,
  title?: string
  titleStyle?: JSX.CSSProperties
  textContent?: string
  contentStyle?: JSX.CSSProperties
  versesContent?: {
    text: string
    number: number
  }[]
  closing?: string
}
