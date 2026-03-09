import './globals.css'

export const metadata = {
  title: 'D.F Painters Bristol | Professional Painting & Decorating Services',
  description: 'Expert painting and decorating services in Bristol. Transform your property with our professional team.',
  openGraph: {
    title: 'D.F Painters Bristol',
    description: 'Professional painting and decorating services',
    url: 'https://df-painters-bristol.vercel.app',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">{children}</body>
    </html>
  )
}
