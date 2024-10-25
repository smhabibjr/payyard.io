
import Head from "next/head";
import Navbar from "@/components/landing/Navbar";
import Banner from "@/components/landing/banner";
import Company from "@/components/landing/company";
import Benefit from "@/components/landing/benefit";
import Transaction from "@/components/landing/transaction";
import Pricing from "@/components/landing/pricing";
import Review from "@/components/landing/review";
import Newsletter from "@/components/landing/newsletter";
import Footer from "@/components/landing/footer";
import Billing from "@/components/landing/Billing";
import FAQ from "@/components/landing/faq";
import ShortExplainVideo from "@/components/landing/ShortExplainVideo";

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

      <article>
        <Company />
        <Benefit />
        <ShortExplainVideo />
        <Transaction />
        <Billing />
        <FAQ />
        <Newsletter />
      </article>

      <footer>
        <Footer />
      </footer>

         {/* 
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