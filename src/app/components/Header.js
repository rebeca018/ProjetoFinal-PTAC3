import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.img_menu}>
                <Image
                    width={40}
                    height={40}
                    src={"book-svgrepo-com.svg"} />
            </div>

            <nav className={styles.navbar}>
                <div className={styles.navbar_link}>
                    <p>My book Store</p>
                </div>

            </nav>
        </header>
    );

}