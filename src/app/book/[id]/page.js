import Image from "next/image";

export default async function Book({params}){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

    return(
        <main>
            <div>
                <Image
                    width={107}
                    height={154}
                    src={data.link}
                />
                <h4>{data.titulo}</h4>
                <p>Autor: {data.autor}</p>
                <p>Editora: {data.editora}</p>
                <p>Gênero: {data.genero}</p>
                <p>Páginas: {data.paginas}</p>
                <p>R$ {data.preco}</p>
            </div>
        </main>
    )
}