import { settings } from "../settings"
import Footer from "../src/components/Footer/Footer"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
      <Footer data={settings.footer} />
    </html>
  )
}
