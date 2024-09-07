import styles from '@/components/HomeServ/HomeServ.module.css';
import { FaHouse } from "react-icons/fa6";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiSolarPanelFill } from "react-icons/pi";

const HomeServ = (): React.ReactElement => {
    return (
        <section className={`${styles.services} ${styles.content}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Serviços</h2>
                <div className={styles.servContent}>
                    <div className={styles.card}>
                        <div className={styles.box}>
                            <i><FaHouse /></i>
                            <div className={styles.text}>Serviços elétricos residenciais</div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.box}>
                            <i><LiaIndustrySolid /></i>
                            <div className={styles.text}>Serviços elétricos em empresas</div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.box}>
                            <i><PiSolarPanelFill /></i>
                            <div className={styles.text}>Instalação de paineis solares</div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HomeServ;