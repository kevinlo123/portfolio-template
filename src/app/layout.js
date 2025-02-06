import Header from './globals/Header.js'
import Footer from './globals/Footer.js'
import "./globals.css";
import {Providers} from "./providers";

export const metadata = {
  title: "Portfolio template",
  description: "",
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
