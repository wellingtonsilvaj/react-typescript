import AboutContent from "@/components/AboutContent";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Head from "next/head";

const Sobre = (): React.ReactElement =>  {
  return (
    <>
      <Head>
        <title>Eco Eletrica - Sobre Enpresa</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <AboutContent />
        <Footer />
      </main>
    </>
  );
}

export default Sobre;
