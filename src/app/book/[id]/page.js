import Image from "next/image";
import styles from "./page.module.css"
export default async function Book({params}){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

    return(
        <main className={styles.main}>
            <div className={styles.book_card}>
                <Image
                    width={107}
                    height={154}
                    src={data.link}
                    className={styles.book_card_img}
                />
                <h4 className={styles.book_card_h4}>{data.titulo}</h4>
                <p className={styles.book_card_p}>Autor: {data.autor}</p>
                <p className={styles.book_card_p}>Editora: {data.editora}</p>
                <p className={styles.book_card_p}>Gênero: {data.genero}</p>
                <p className={styles.book_card_p}>Páginas: {data.paginas}</p>
                <p className={styles.book_card_p}>R$ {data.preco}</p>
            </div>
        </main>
    )
}