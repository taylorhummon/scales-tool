import Link from "next/link"

import { ScalesTool } from "@scalesTool/ScalesTool"

import styles from "./page.module.scss"


export default function Page() {
  return (
    <>
      <div className={styles["see-also-links"]}>
        See also: <Link href="/mode/">Modes Tool</Link> and <Link href="/triad/">Triads Tool</Link>.
      </div>
      <h1>
        Explore Scales Visually
      </h1>
      <ul className={styles["instructions"]}>
        <li>
          Arrow buttons change keys within a mode.
        </li>
        <li>
          Sharp and flat buttons move between parallel keys.
        </li>
        <li>
          Blue dot buttons move between relative keys.
        </li>
      </ul>
      <ScalesTool />
    </>
  )
}
