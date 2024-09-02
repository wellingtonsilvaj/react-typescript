import styles from '@/components/Menu/Menu.module.css'
import { useState } from 'react';
import { LiaBarsSolid } from "react-icons/lia";

const Menu = (): React.ReactElement => {
    const [isActive, setIsActive] = useState(false);

    const activeMenu = (): void => {
        setIsActive(!isActive);
    }
    return(
        <nav className={styles.navbar}>
            <div className={styles.maxWidth}>
                <div className={styles.logo}>
                    <a href="index.html">Eco-Eletrica</a>
                </div>
                <ul className={`${styles.menu} ${ isActive ? styles.active : ""}`} id={styles.menuSite}>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sobre-empresa.html">Sobre Empresa</a></li>
                    <li><a href="contato.html">Contato</a></li>

                </ul>
                <div className={styles.menuBtn} id={styles.menuBtn}>
                    <i onClick={activeMenu}><LiaBarsSolid /></i>
                </div>
            </div>
        </nav>
    )
}

export default Menu;