
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
            Rooftop Garden: A Smart Strategy to Beat Inflation 
            </h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            Understanding Food Inflation       
            </h2>

            <p className="mb-4">
            Food inflation has become a pressing issue, with prices rising significantly over the past few years. According to the U.S. Bureau of Labor Statistics, food prices increased by 10.4% in 2022 alone. This steep rise in costs can strain family budgets, making it essential to find ways to mitigate these expenses. One effective solution is to implement a rooftop garden, which can provide fresh produce at a fraction of the retail price.     
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Cost Savings from Home-Grown Produce   
            </h2>

            <p className="mb-4">
            Growing your own vegetables and herbs can lead to substantial savings. For instance, a single tomato plant can yield approximately 10-15 pounds of tomatoes in a season, which can equate to over $30 at the grocery store. Additionally, by cultivating a variety of crops, families can reduce their monthly grocery bills significantly. Research indicates that individuals who grow their own food can save between $200 to $600 annually, depending on the size of their garden and the types of produce grown. 
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Mental Health Benefits and Nutritional Value  
            </h2>

            <p className="mb-4">
            Beyond financial savings, rooftop gardening offers mental health benefits. Engaging in gardening activities can reduce stress and improve overall well-being. Furthermore, home-grown produce is often more nutritious than store-bought alternatives, as it can be harvested at peak ripeness. This ensures that families receive the best possible nutrients, positively impacting their health and reducing medical expenses in the long run.
            </p>

            



              <hr className="my-8 border-t mt-48 border-gray-300" />




          <h2 className="text-3xl font-semibold mt-48 mb-4"> The Best AI Headshot Generator</h2>

          <p class="mb-4 text-2xl ">
  If you want AI headshots that'll make people wonder if you've got a twin working as a model, 
  <a href="https://www.headshotpro.com/?via=aiimageandvideogenerators" class="font-bold text-2xl text-red-700">HeadshotPro</a> is your golden ticket. It's like having a personal photographer, stylist, and 
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
               
               <span class="font-bold text-3xl text-red-700   "> aiimageandvideogenerators.xyz   </span>
               
               and discover new AI tools like this one!</span>
                </Link>
          </div>
 
          
           <div className="grid text-center  gap-4 mt-48 mb-2">
         <span class="font-bold text-sm text-slate-700   ">  beatinflationwithanurbangarden.website and beat inflation with an urban garden are registered trademarks.</span>
  </div>
 
              </div>
     
    </section>







        </div>
    );
    }
    