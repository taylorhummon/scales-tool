import Image from "next/image"
import Link from "next/link"

import styles from "./page.module.scss"
import TaylorImage from "./_images/taylor.webp"
import OrigamiImage from "./_images/origami.webp"
import TreeImage from "./_images/tree.webp"

import ExternalLink from "./_components/ExternalLink"


export default function About(
): React.ReactNode {
  return (
    <>
      <h1>About</h1>
      <p>
        Hi, my name&apos;s Taylor! I live in Baltimore with my spouse, Noel, and our little one, G.
        My pronouns are they/them, and in case it wasn&apos;t obvious from the rest of the website,
        I&apos;m probably a bit of a nerd.
      </p>
      <p>
        I love making interactive visuals to help make sense of hard topics. Lately I&apos;ve been
        thinking a bunch about the math behind musical scales, and that&apos;s led me to
        create <Link href="/">Visual Music Tools</Link>. You can take a look at
        the <ExternalLink href="https://github.com/taylorhummon/visual-music-tools">source code</ExternalLink>,
        too, if you&apos;re curious.
      </p>
      <p>
        I&apos;m a software engineer working in Solar Tech and Medical Tech. I care deeply about
        doing good for the world, and I feel lucky that my skills in coding and math can be applied
        to make a difference.
      </p>
      <p>
        To learn about my professional work, check out:
      </p>
      <ul>
        <li>
          <ExternalLink href="https://linkedin.com/in/taylor-hummon">LinkedIn profile</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/taylorhummon">GitHub profile</ExternalLink>
        </li>
      </ul>
      <p>
        And you can reach me at <a href="mailto:hello@taylorhummon.com">hello@taylorhummon.com</a>!
      </p>
      <div className={styles["photos"]}>
        <Image
          className={styles["photo"]}
          title="Taylor"
          alt="A photo of Taylor"
          src={TaylorImage}
        />
        <Image
          className={styles["photo"]}
          title="Origami"
          alt="Two shapes made of unit origami"
          src={OrigamiImage}
        />
        <Image
          className={styles["photo"]}
          title="Tree"
          alt="A tree with pink petals"
          src={TreeImage}
        />
      </div>
    </>
  )
}
