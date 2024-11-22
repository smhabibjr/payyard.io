import Head from "next/head";
import Navbar from "@/shared/landing/Navbar";
import Banner from "@/shared/landing/banner";
import HowWorks from "@/shared/landing/HowWorks";
import Transaction from "@/shared/landing/transaction";
import Newsletter from "@/shared/landing/newsletter";
import Footer from "@/shared/landing/footer";
import Billing from "@/shared/landing/Billing";
import FAQ from "@/shared/landing/faq";
import ShortExplainVideo from "@/shared/landing/ShortExplainVideo";
import JoinCommunity from "@/shared/landing/JoinCommunity";

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
        <HowWorks />
        <ShortExplainVideo />
        <Transaction />
        <Billing />
        <FAQ />
        <JoinCommunity />
        <Newsletter />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}