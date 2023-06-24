import './css/screen.scss'
import Link from 'next/link';

export const metadata = {
  title: 'Slow Names'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/news">news</Link></li>
              <li><Link href="/press">press</Link></li>
              <li><Link href="/shows">shows</Link></li>
              <li><Link href="/recordings">recordings</Link></li>
              <li><Link href="/photos">photos</Link></li>
              <li><Link href="/videos">videos</Link></li>
            </ul>
          </nav>
        </header>

        { children }

      </body>
    </html>
  )
}
