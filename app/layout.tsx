import type { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "@/components/TanstackProvider/TanstackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from 'next/font/google';


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
    // url
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,

}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        <TanStackProvider>
          <main>
            {children}

          </main>
        </TanStackProvider>
        <Footer />
        <div id="modal-root"></div>
      </body >
    </html>
  );
}
