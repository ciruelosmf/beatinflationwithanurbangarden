
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
            Rooftop Gardening: A Smart Strategy to Beat Inflation 
            </h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            Understanding Food Inflation       
            </h2>

            <p className="mb-4">
            In recent years, food prices have risen significantly, with an average increase of 10% in 2022 alone. This surge in food inflation puts a strain on household budgets, making it essential for families to find ways to mitigate these rising costs. Rooftop gardening offers a practical solution by allowing individuals to grow their own food right at home, reducing reliance on store-bought produce.     
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Financial Benefits of Rooftop Gardening   
            </h2>

            <p className="mb-4">
            By cultivating vegetables and herbs on rooftops, families can save an estimated $500 to $1,000 annually on grocery bills. The cost of seeds, soil, and basic gardening tools is minimal compared to the cumulative expense of purchasing fresh produce from supermarkets. Additionally, growing your own food ensures access to organic options, which can be more expensive in stores. 
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Mental Health and Nutrition Advantages  
            </h2>

            <p className="mb-4">
            Rooftop gardening not only contributes to financial savings but also enhances mental well-being. Engaging in gardening activities has been shown to reduce stress and promote mindfulness. Furthermore, home-grown produce is often fresher and more nutritious than store-bought options, leading to healthier eating habits for families. The combination of economic and health benefits makes rooftop gardening an appealing choice for urban dwellers.
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
    