import Head from "next/head";
import Navbar from "@/components/landing/Navbar";
import Banner from "@/components/landing/banner";
import HowWorks from "@/components/landing/HowWorks";
import Transaction from "@/components/landing/transaction";
import Newsletter from "@/components/landing/newsletter";
import Footer from "@/components/landing/footer";
import Billing from "@/components/landing/Billing";
import FAQ from "@/components/landing/faq";
import ShortExplainVideo from "@/components/landing/ShortExplainVideo";
import JoinDiscord from "@/components/landing/joinDiscord";

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
        <JoinDiscord />
        <Newsletter />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}