import Image from "next/image";
import styles from "./page.module.css"
export default async function Book({params}){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

    return(
        <main>
            <div className={"book-card"}>
                <Image
                    width={107}
                    height={154}
                    src={data.link}
                    className={"book-card-img"}
                />
                <h4 className={"book-card-h4"}>{data.titulo}</h4>
                <p className={"book-card-p"}>Autor: {data.autor}</p>
                <p className={"book-card-p"}>Editora: {data.editora}</p>
                <p className={"book-card-p"}>Gênero: {data.genero}</p>
                <p className={"book-card-p"}>Páginas: {data.paginas}</p>
                <p className={"book-card-p"}>R$ {data.preco}</p>
            </div>
        </main>
    )
}