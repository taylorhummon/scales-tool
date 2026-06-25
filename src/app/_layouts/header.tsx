import Link from "next/link"

import styles from "./header.module.scss"


export default function Header(
) {
  return (
    <header
      className={styles["header-relative"]}
      role="banner"
    >
      <div
        className={styles["header-absolute"]}
      >
        <div
          className={styles["header-content"]}
        >
          <Link
            className={styles["site-title"]}
            href="/"
          >
            Visual Music Tools
          </Link>
          <Link
            className={styles["navigation-link"]}
            href="/about/"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  )
}
