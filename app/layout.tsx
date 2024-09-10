export const metadata = {
  title: 'SnapJob',
  description: 'Created by Snapjob',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
