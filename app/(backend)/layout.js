export const metadata = {
  title: 'tb.com | Gestionale',
  description: 'Gestionale Sanity del sito tobiabartolomei.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
