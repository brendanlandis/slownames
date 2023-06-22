import './css/globals.scss'

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
        {/* <header className="container">
          <nav>
            <ul>
              <li><a href="#">news</a></li>
              <li><a href="#">press</a></li>
              <li><a href="#">shows</a></li>
              <li><a href="#">recordings</a></li>
              <li><a href="#">photos</a></li>
              <li><a href="#">videos</a></li>
            </ul>
          </nav>
        </header> */}

        {children}

      </body>
    </html>
  )
}
