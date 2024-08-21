import React from 'react';
import Script from "next/script";
import Link from "next/link"
import Head from 'next/head';



export default function Blog() {
  return (




    < div className="relative min-h-screen flex bg-blue-100 flex-col items-center">



      


<Head>
        <link rel="canonical" href="https://beatinflationwithanurbangarden.website/blog" />
      </Head>




      <header className=" sticky top-0 z-40 border-b border-b-muted block bg-slate-50  ">
        <div className="container max-w-7xl py-2 px-4 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
             
            <h2 className="md:text-xl text-base font-semibold text-black  px-4 md:px-6">   Beat inflation with an urban garden</h2>
          <nav className=" flex flex-row items-center gap-4">
            <Link  href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  Home </span>
            </Link>
            <Link  href="/blog" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  Blog </span>
            </Link>
            <Link  href="https://www.amazon.com/dp/B0D15C98H4" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  Book </span>
            </Link>
            <Link  href="/about" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  About </span>
            </Link>
            <Link  href="/contact" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  Contact </span>
            </Link>
          </nav>
          </div>
 
        </div>       

      </header>



            <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          
});
         `}
      </Script>


 
    <section className=" flex flex-col items-center justify-center   py-16">
      <div className=" ">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contact www.beatinflationwithanurbangarden.website

        </h1>
        
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Feel free to write to: beatinflationwithanurbangarden@gmail.com

        </h2>
      </div>

      <div className="mt-12">
          <Link href="https://www.beatinflationwithanurbangarden.website" className="text-sm text-red-700 font-medium hover:text-primary" prefetch={false}>
            Go to Homepage
          </Link>
        </div>


        <div className="mt-12">
          <Link href="https://www.amazon.com/dp/B0D15C98H4" className="text-sm text-red-700 font-medium hover:text-primary" prefetch={false}>
            Buy book
          </Link>
        </div>




    </section>

</div  >
  );
}
