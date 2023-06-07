import Nav from '@components/Nav'
import '@styles/globals.css'
import Provider from '@components/Provider'
export const metadata = {
    titlle: 'promptopia',
    description: 'Discover and share AI propmpts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout