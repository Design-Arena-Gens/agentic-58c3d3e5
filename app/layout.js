export const metadata = {
  title: 'Farewell Scene - Pixar Style',
  description: 'A touching farewell scene between a child and a parrot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
