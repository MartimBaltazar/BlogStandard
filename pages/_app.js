import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { DM_Sans, DM_Serif_Display} from '@next/font/google';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return  <UserProvider>
    {getLayout(<Component {...pageProps} />, pageProps)}    
          </UserProvider> 
}

export default MyApp
