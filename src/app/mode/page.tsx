import Link from "next/link"

import { ModesTool } from "@modesTool/ModesTool"

import styles from "./page.module.scss"


export default function Page() {
  return (
    <>
      <div className={styles["see-also-links"]}>
        See also: <Link href="/">Scales Tool</Link> and <Link href="/triad/">Triads Tool</Link>.
      </div>
      <h1>
        Explore Modes Visually
      </h1>
      <ul className={styles["instructions"]}>
        <li>
          Plus and minus buttons change the mode.
        </li>
      </ul>
      <ModesTool />
    </>
  )
}
