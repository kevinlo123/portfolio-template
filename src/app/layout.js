import Header from './globals/Header.js'
import Footer from './globals/Footer.js'
import "./globals.css";
import {Providers} from "./providers";

export const metadata = {
  title: "Kevin Lopez's Portfolio",
  description: "Welcome! I'm a front-end developer dedicated to creating intuitive digital experiences. Take a peek at my portfolio, where I showcase user-friendly interfaces and smooth digital creations. Join me on this journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode transition-colors">
      <body>
        <Header />
          <Providers>
            {children}
          </Providers>
        <Footer />
      </body>
    </html>
  );
}
