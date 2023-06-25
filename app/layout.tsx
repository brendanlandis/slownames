import './css/screen.scss'
import Header from './components/header'

export const metadata = {
  title: 'Slow Names',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        { children }
      </body>
    </html>
  )
}
