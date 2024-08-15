import Image from "next/image";
import Link from "next/link"
import Head from 'next/head';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">



<Head>
        <meta property="og:title" content="✨☘ Beat Inflation with an Urban Garden" />
        <meta
          property="og:description"
          content="☘ Urban gardening emerges not just as a hobby but as a practical approach to countering the effects of inflation."
        />
        <meta
          property="og:image"
          content="https://beatinflationwithanurbangarden.website/cov.JPG"
        />
      </Head>


      <h1 className="text-4xl font-bold text-white mb-8">Beat Inflation with an Urban Garden</h1>
      <h2 className="text-xl font-bold text-white mt-2  mb-2">Buy book on Amazon </h2>

      <div className="rounded-lg shadow-2xl overflow-hidden bg-white">
        <iframe 
          sandbox="allow-scripts allow-same-origin allow-popups" 
          width="293" 
          height="454" 
          frameBorder="0" 
          allowFullScreen 
          style={{ maxWidth: '100%' }}
          src="https://read.amazon.com/kp/card?asin=B0D15C98H4&preview=inline&linkCode=kpe&ref_=kip_embed_taf_preview_TTCHEX7RAPEFGRJ3NV0T"
        ></iframe>
      </div>


      <div className="rounded-lg shadow-2xl overflow-hidden max-w-2xl p-8 ">

      Urban gardening is far more than an engaging hobby; it holds the power to transform our diets, our homes, our bank accounts, and our communities. 
      
      This book will guide you through the processes of setting up and maintaining an urban garden in order to produce your own cheaper food, fostering sustainability and connecting with nature in urban spaces. You beat Inflation by doing so. If you have ambitions you can make it a business.
      </div>

      <Link href="/blog" className="text-xl font-medium hover:text-primary mt-12" prefetch={false}>
      Blog
            </Link>
      <h2 className="text-2xl font-bold text-white mt-24  mb-2">beatinflationwithanurbangarden.website </h2>




      <div className="grid grid-cols-1 gap-4 mt-2 mb-12 text-left">
               <Link href="https://aiimageandvideogenerators.xyz" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 
               <span className="font-bold text-xl text-red-400   ">   Go to 
               
               <span className="font-bold text-2xl text-red-100   "> aiimageandvideogenerators.xyz   </span>
               
               to discover new AI tools!</span>
                </Link>
          </div>


    </main>
  )
}









