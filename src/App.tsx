import styles from "./App.module.scss"

import { bookletPrayers } from "./data/bookletPrayers"
import { BookPage } from "./components/bookPage/BookPage"
import { PrintPage } from "./components/printPage/PrintPage"

const BOOKLETS_PER_PAGE = 4

//@ts-ignore

const App = () => {
  const bookletPages = bookletPrayers.pages

  const bookletPagesCollection = [
    [bookletPages[7], bookletPages[0], bookletPages[5], bookletPages[2]],
    [bookletPages[1], bookletPages[6], bookletPages[3], bookletPages[4]],
  ]

  return (
    <>
      {bookletPagesCollection.map((bookletPages) => (
        <PrintPage>
          {bookletPages.map((bookletPage) => (
            <BookPage bookletPage={bookletPage} />
          ))}
        </PrintPage>
      ))}
    </>
  )
}

export default App
