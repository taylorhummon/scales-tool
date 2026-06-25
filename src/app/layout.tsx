import { type Metadata } from "next"
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core"

import Content from "./_layouts/content"
import Footer from "./_layouts/footer"
import Header from "./_layouts/header"

import { FIXED_WIDTH_FONT } from "./fonts"
import { theme } from "./theme"
import "@mantine/core/styles.css"
import "./globals.scss"


export const metadata: Metadata = {
  title: "Visual Music Tools",
  description: "Visualize scales, modes, and triads!",
}

interface LayoutParameters {
  children: React.ReactNode,
}

export default function Layout({
  children,
}: LayoutParameters): React.ReactNode {
  return (
    <html
      lang="en"
      className={FIXED_WIDTH_FONT.variable}
      {...mantineHtmlProps}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          <Content>
            {children}
          </Content>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
