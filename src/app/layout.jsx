// import localFont from "next/font/local";
import { Cairo } from 'next/font/google'
import "./globals.css";


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
      <body
        className={`${cairo.className} antialiased  `}
      >

        {children}
      </body>
    </html>
  );
}
