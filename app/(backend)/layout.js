export const metadata = {
  title: 'Gestionale | Tobia Bartolomei',
  description: 'Gestionale Sanity del sito tobiabartolomei.com',
  language: 'it',
	openGraph: {
		title: 'Gestionale',
		description: 'Gestionale Sanity del sito tobiabartolomei.com.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://tob.codes/studio/',
    site_name: 'Tobia Bartolomei',
	},
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
