import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/dist/frontend'
import Navbar from './components/Navbar'
function MyApp({ Component, pageProps }) {

  return (
    <UserProvider>
      <Navbar/>
      <Component {...pageProps} />
    </UserProvider>
    ) 
    
}

export default MyApp
