import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import { ShopProvider } from './components/Cart';

const averta = localFont({
  src: [
    {
      path: './fonts/Averta-Regular.woff',
      weight: '400'
    },
    {
      path: './fonts/Averta-Bold.woff',
      weight: '700'
    },
    {
      path: './fonts/Averta-Light.woff',
      weight: '200'
    }
  ],
  variable: '--font-averta'
});

export const metadata = {
  title: "Cozy Threads",
  description: "An ecommerce demo experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${averta.variable} font-sans`}>
        <ShopProvider>
          <Navbar/>
          <main className="max-w-screen-xl mx-auto pt-20">
            {children}
          </main>
        </ShopProvider>
      </body>
    </html>
  );
}
