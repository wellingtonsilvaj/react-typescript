import styles from '@/styles/contact.module.css';
import Head from "next/head";
import Menu from "@/components/Menu";
import ContactContent from '@/components/ContactContent';
import ContactForm from '@/components/ContactForm';
import Footer from "@/components/Footer";

const Contato = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Eco Eletrica - Contato</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <section className={`${styles.content} ${styles.contact}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Contato</h2>
                <div className={styles.contactContent}>
                <ContactContent />
                <ContactForm />
               
              </div>
            </div>
          </section>
        <Footer />
      </main>
    </>
  );
}

export default Contato;