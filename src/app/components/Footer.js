import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.nome}>
                <ul>
                    <li>PTAC</li>
                    <li>Avaliação 2º Bimestre</li>
                    <li>Rebeca Soares Nascimento</li>
                </ul>
            </div>

            <div className={styles.logo}>
                    <Image
                        width={30}
                        height={30}
                        src={"book-svgrepo-com.svg"}
                    />
            </div>
        </footer>
    )
}