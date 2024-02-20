// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./comman/Header";
import Footer from "./comman/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meelance",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
