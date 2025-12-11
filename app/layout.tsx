import type { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from 'next/font/google';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap'
});



export const metadata: Metadata = {
  title: "Notes App",
  description: "Easy Notes Manager",
  openGraph: {
    title: "Notes App",
    description: "Easy Notes Manager",
    images: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    url: "https://08-zustand-7ugr.vercel.app/"
  }
};

export default function RootLayout({ children, modal }: Readonly<{
  children: React.ReactNode,
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </TanStackProvider>
        <div id="modal-root"></div>
      </body >
    </html>
  );
}
