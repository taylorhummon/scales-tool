import Link from "next/link"

import { TriadsTool } from "@triadsTool/TriadsTool"

import styles from "./page.module.scss"


export default function Page() {
  return (
    <>
      <div className={styles["see-also-links"]}>
        See also: <Link href="/">Scales Tool</Link> and <Link href="/mode/">Modes Tool</Link>.
      </div>
      <h1>
        Explore Triads Visually
      </h1>
      <ul className={styles["instructions"]}>
        <li>
          Rotation buttons select a triad.
        </li>
      </ul>
      <TriadsTool />
    </>
  )
}
