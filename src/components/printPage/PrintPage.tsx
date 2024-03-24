import { JSX } from "solid-js/jsx-runtime"
import styles from "./printPage.module.scss"

export interface IPrintPageProps {
  children: JSX.Element
}

export const PrintPage = ({ children }: IPrintPageProps) => (
  <>
    <div class={styles.pageBreak} />
    <div class={styles.printPage}>{children}</div>
  </>
)
