// import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Component {...pageProps}  />
    </ShoppingCartProvider>
    ) 
}
