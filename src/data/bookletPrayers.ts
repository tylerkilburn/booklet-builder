import { IBooklet, IBookletPage } from "../types"
import { prayerLovingLikeJesus } from "./prayers/prayerLovingLikeJesus"
import { prayerMorning } from "./prayers/prayerMorning"
import { prayerSurrender } from "./prayers/prayerSurrender"
import { prayerMeal } from "./prayers/prayerMeal"
import { prayerBedtime1 } from "./prayers/prayerBedtime1"
import { prayerBedtime2 } from "./prayers/prayerBedtime2"
import { prayerChurchFamily } from "./prayers/prayerChurchFamily"
import { prayerChurchLeaders } from "./prayers/prayerChurchLeaders"

const CLOSING = "In Jesus’ Name, Amen"

const appendClosings = (pages: IBookletPage[]) =>
  pages.map((page) => ({
    ...page,
    closing: CLOSING,
  }))

export const bookletPrayers: IBooklet = {
  pages: appendClosings([
    prayerLovingLikeJesus,
    prayerSurrender,
    prayerChurchFamily,
    prayerChurchLeaders,
    prayerMorning,
    prayerMeal,
    prayerBedtime1,
    prayerBedtime2,
  ]),
}
