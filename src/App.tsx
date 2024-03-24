import styles from "./App.module.scss"

import groceries from "./data/groceries.json"
import { BookPage } from "./components/bookPage/BookPage"
import { PrintPage } from "./components/printPage/PrintPage"

const BLANK_TEXT = "__________"
const ITEM_LIMIT = 44

//@ts-ignore

const App = () => {
  // const data = matchDataToListName(import.meta.env.VITE_LIST_NAME)
  return (
    <>
      <PrintPage>
        <BookPage />
        <BookPage />
        <BookPage />
        <BookPage />
      </PrintPage>
      <PrintPage>
        <BookPage />
        <BookPage />
        <BookPage />
        <BookPage />
      </PrintPage>
    </>
  )
}
const matchDataToListName = (listName: string) => {
  switch (listName) {
    case "grocery":
    case "groceries":
      return groceries
  }
  return []
}

export default App
