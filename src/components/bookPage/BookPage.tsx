import { JSX } from "solid-js/jsx-runtime"
import { IBookletPage } from "../../types"
import styles from "./bookPage.module.scss"

const NUMB_BLANK_CHARS = 8_000

export interface IBookPageProps {
  bookletPage: IBookletPage
}

export const BookPage = ({ bookletPage }: IBookPageProps) => {
  if (bookletPage.isBlank) {
    return (
      <div class={styles.bookPage}>
        {renderTitle(bookletPage)}
        <div
          class={styles.bookPageText}
          style={bookletPage.contentStyle}
          data-underline
        >
          {createBlankText(NUMB_BLANK_CHARS)}
        </div>
      </div>
    )
  }

  return (
    <div class={styles.bookPage}>
      {renderTitle(bookletPage)}
      <div class={styles.bookPageText} style={bookletPage.contentStyle}>
        {bookletPage.versesContent ? (
          <div>
            {bookletPage.versesContent.map((verse) => (
              <>
                <span class={styles.bookPageTextVerseNumber}>
                  {verse.number}{" "}
                </span>
                <span>{verse.text}</span>{" "}
              </>
            ))}
          </div>
        ) : (
          <div>
            <span class={styles.bookPageTextTab} />
            {bookletPage.textContent}
          </div>
        )}
        <div class={styles.bookPageTextClosing}>{bookletPage.closing}</div>
      </div>
    </div>
  )
}

const createBlankText = (numChars: number) => {
  let text = ""
  for (let i = 0; i < numChars; i++) {
    text += " \u00A0"
  }
  return text
}

const renderTitle = (bookletPage: IBookletPage) =>
  bookletPage.title ? (
    <div class={styles.bookPageTitle} style={bookletPage.titleStyle}>
      {bookletPage.title}
    </div>
  ) : null
