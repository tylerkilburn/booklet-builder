import styles from "./App.module.scss"

import { bookletPrayers } from "./data/bookletPrayers"
import { BookPage } from "./components/bookPage/BookPage"
import { PrintPage } from "./components/printPage/PrintPage"
import { pageNotes } from "./data/pageNotes"

const BOOKLETS_PER_PAGE = 4

//@ts-ignore

const App = () => {
  const bookletPrayersCollection = [
    [
      bookletPrayers.pages[7],
      bookletPrayers.pages[0],
      bookletPrayers.pages[5],
      bookletPrayers.pages[2],
    ].reverse(),
    [
      bookletPrayers.pages[1],
      bookletPrayers.pages[6],
      bookletPrayers.pages[3],
      bookletPrayers.pages[4],
    ].reverse(),
  ]

  const bookletNotesCollection = [
    [pageNotes, pageNotes, pageNotes, pageNotes],
    [pageNotes, pageNotes, pageNotes, pageNotes],
  ]

  return (
    <>
      {bookletNotesCollection.map((bookletPages) => (
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
