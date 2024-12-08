// import localFont from "next/font/local";
import { Cairo } from 'next/font/google'
import "./globals.css";
import Footer from '../components/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const cairo = Cairo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',

})

export const metadata = {
  title: "سوريـــة حــــرة",
  description: "هذا الموقع يعرض اسماء المعتقلين المحررين بعد تحرير سورية من بطش الطاغية بشار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" data-theme="emerald" dir='RTL'>
      <head>

        <meta name="google-site-verification" content="FAb62nnQ0FioK9c_xRCZl2Rmv8sjfdZAErl5Bt3Iqhs" />
      </head>
      <body
        className={`${cairo.className} antialiased  `}>

        {children}
        <Footer></Footer>
      </body>
      <GoogleAnalytics gaId="G-QGHJXFNX2H" />
    </html>
  );
}
