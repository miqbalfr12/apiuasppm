import Image from "next/image";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
 return (
  <main
   className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-amber-950/10 after:dark:from-yellow-900 after:dark:via-[#786400]/40 before:lg:h-[360px]">
    <div className="flex flex-col z-10">
     <div className="mb-2 flex gap-2">
      <a href="https://reidteam.web.id">
       <img
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-xl font-bold h-10 "
        src="logoReid.png"
        alt="logo reid"
       />
      </a>

      <img
       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-xl font-bold h-10 w-10 "
       src="logo.png"
       alt="logo coffee bean"
      />
     </div>
     <p className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-xl font-bold">
      Free Api Coffe Bean
     </p>
     <p>
      Oleh : <a href="https://reidteam.web.id">REID Team</a>
     </p>
    </div>
   </div>
  </main>
 );
}
