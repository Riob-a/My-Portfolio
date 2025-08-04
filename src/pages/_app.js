import '../globals.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="app-layout min-h-screen flex flex-col">
      <main className="content flex-grow">
        <Component {...pageProps} />
        <ThemeToggle/>
      </main>
      <Footer />
    </div>
  )

}
