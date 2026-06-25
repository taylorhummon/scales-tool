import { TriadsTool } from "@triadsTool/TriadsTool"

import styles from "./page.module.scss"


export default function Page() {
  return (
    <>
      <h1>
        Triads Tool
      </h1>
      <ul className={styles["instructions"]}>
        <li>
          Rotation buttons select a triad.
        </li>
        <li>
          Sharp and flat buttons change the scale&apos;s rank.
        </li>
      </ul>
      <TriadsTool />
    </>
  )
}
