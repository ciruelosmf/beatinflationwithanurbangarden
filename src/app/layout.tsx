  import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "☘ Beat Inflation with an Urban Garden",
  description: "☘ Discover how urban gardening can be your solution to beating inflation. This book guides you through setting up an urban garden to produce your own affordable, sustainable food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


          <head>
                <Script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <Script id="google-analytics">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
                    page_path: window.location.pathname,                    
          });
                  `}
                </Script>   

          </head>


         <body 
                className={inter.className}>
                                                {children}
        </body>
    </html>
  );
}
