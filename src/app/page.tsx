import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Beat Inflation with an Urban Garden</h1>
      <div className="rounded-lg shadow-2xl overflow-hidden bg-white">
        <iframe 
          sandbox="allow-scripts allow-same-origin allow-popups" 
          width="533" 
          height="854" 
          frameBorder="0" 
          allowFullScreen 
          style={{ maxWidth: '100%' }}
          src="https://read.amazon.com/kp/card?asin=B0D15C98H4&preview=inline&linkCode=kpe&ref_=kip_embed_taf_preview_TTCHEX7RAPEFGRJ3NV0T"
        ></iframe>
      </div>


      <h2 className="text-2xl font-bold text-white mb-8"> </h1>beatinflationwithanurbangarden.website </h2>


    </main>
  )
}









