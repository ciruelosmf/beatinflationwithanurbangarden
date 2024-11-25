
    "use client"

    import React from 'react';
    import Script from "next/script";
    import Link from "next/link"


    export default function Blog() {
    return (
        <div className="relative min-h-screen flex bg-blue-100 flex-col items-center">




            




      <header className=" sticky top-0 z-40 border-b border-b-muted block bg-slate-50  ">
        <div className="container max-w-7xl py-2 px-4 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
             
            <h2 className="md:text-xl text-base font-semibold text-black  px-4 md:px-6"> Beat inflation with an urban garden</h2>
          <nav className=" flex flex-row items-center gap-4">
            <Link  href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  Home </span>
            </Link>
            <Link  href="/blog" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  Blog </span>
            </Link>
            <Link  href="/book" className="text-sm font-medium hover:text-primary" prefetch={false}>
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










    <section className=" text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">




            
            
























      <h1 className="text-4xl font-bold text-center mb-12">
      LimeParrot, a New Suite of Web Tools and Content

           </h1>
           <h2 className="text-2xl font-semibold mt-16 mb-4">
           Our initial release features two distinct tools, each serving a unique purpose in its respective domain:
           </h2>
               <p className="mb-4">       
               The Eulogy Generator stands as our first offering, developed to assist professionals and individuals during sensitive moments. This tool provides thoughtfully structured templates and guidance for creating meaningful memorial speeches, addressing a critical need for those faced with this important responsibility.            

    
               </p>


               <br></br>
 
               <hr className="my-8 border-t mt-48 border-gray-300" />

               <Link  href="https://www.limeparrottech.site/" className="text-sm font-medium hover:text-primary" prefetch={false}>
              <span class="font-bold text-xl text-slate-700">  Go to LimeParrot </span>
            </Link>
            <hr className="my-8 border-t mt-48 border-gray-300" />

               <p className="mb-4">       
               Our second tool focuses on business intelligence: a comprehensive database of startups displaying their Monthly Recurring Revenue (MRR). This transparency-focused resource enables entrepreneurs, investors, and analysts to access valuable market data, facilitating informed decision-making and strategic planning.
               </p>





        









               <hr className="my-8 border-t mt-48 border-gray-300" />

















             

          <h2 className="text-3xl font-semibold mt-48 mb-4"> The Best AI Headshot Generator</h2>

<p class="mb-4 text-2xl ">
If you want AI headshots that'll make people wonder if you've got a twin working as a model, 
<a href="https://www.headshotpro.com/?via=aiimageandvideogenerators" class="font-bold text-2xl text-red-700"> HeadshotPro</a> is your golden ticket. It's like having a personal photographer, stylist, and 
Photoshop wizard all rolled into one AI-powered package. Now that's what we call a head shot!
</p>






<Link href="https://www.headshotpro.com/?via=aiimageandvideogenerators" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 

<div className="grid grid-cols-2 gap-4 mb-12">
  <img
      src="/HeadshotPro_1.jpg"
      width={100}
      height={100}
      alt="HeadshotPro"
      className="aspect-square object-cover  shadow-lg"
    />
    <img
      src="/HeadshotPro_2.jpg"
      width={100}
      height={100}
      alt="HeadshotPro"
      className="aspect-square object-cover  shadow-lg"
    />
  </div>

  <span class="font-bold text-2xl text-red-700   ">    Go to HeadshotPro website</span>


    </Link>





<div className="grid grid-cols-1 gap-4 mt-12 mb-12 text-left">
     <Link href="https://www.aiimageandvideogenerators.xyz/" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 
     <span class="font-bold text-2xl text-red-400   ">   Go to 
     
     <span class="font-bold text-3xl text-red-700   ">  https://www.aiimageandvideogenerators.xyz   </span>
     
     and discover new AI tools like this one!</span>
      </Link>
</div>




<hr className="my-8 border-t mt-48 border-gray-300" />




<Link  href="https://www.beatinflationwithanurbangarden.website" className="bg-red-900 text-sm font-medium " prefetch={false}>


 <div className="grid text-center  bg-green-100 rounded-lg shadow-lg p-2 gap-4 mt-48 mb-2">
<span class="font-bold text-sm text-slate-700   "> 
<span class="font-bold text-2xl text-green-700   "> https://www.beatinflationwithanurbangarden.website  </span>

  and "Beat Inflation with an Urban Garden" are registered trademarks. 2024.
 
 
 </span>
</div>

</Link>

    </div>

</section>







</div>
);
}
    