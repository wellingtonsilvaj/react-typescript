import styles from '@/components/HomeTop/HomeTop.module.css';
import Link from 'next/link';

const HomeTop = (): React.ReactElement => {
    return (
        <section className={`${styles.content} ${styles.top}`} style={{ backgroundImage: `linear-gradient(to right, var(--main-color) 25%, rgba(255, 255, 255, 0)), url("/images/homeTop/banner_top_v7.jpg")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
            <div className={styles.maxWidth}>
                <div className={styles.topContent}>
                    <div className={styles.textOne}>Temos a solução</div>
                    <div className={styles.textTwo}>que a sua empresa precisa</div>
                    <div className={styles.textThree}>Podemos ajudar a sua empresa!</div>
                    <Link href="/contato">Entre em contato</Link>
                </div>
            </div>
        </section>
    );
}

export default HomeTop;