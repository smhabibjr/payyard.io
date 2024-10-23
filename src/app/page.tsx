import Head from "next/head";
import Navbar from "@/components/landing/Navbar";
import Banner from "@/components/landing/banner";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Fintech - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className='w-full h-[700px] md:h-[1100px] xl:h-header bg-gradient'>
        <Navbar />
        <Banner />
      </header>
      
      {/* 

      <article>
        <Company />
        <Benefit />
        <Transaction />
        <Pricing />
        <Review />
        <Newsletter />
      </article>

      <footer>
        <Footer />
      </footer> */}
    </div>
  );
}