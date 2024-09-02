import Head from "next/head";
import Menu from '@/components/Menu';

 const Home = ():React.ReactElement => {
  return (
    <>
      <Head>
        <title>Eco Eletrica - Home</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
      </main>
    </>
  );
}

export default Home;
