'use client'
import { useEffect, useState } from "react";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import Carregando from "./components/Carregando";
import ErrorFetch from "./components/ErrorFetch";

export default function Home() {

  const [listBook, setListBook] = useState([]);
  const [listLibrary, setListLibrary] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() =>{
    const getBook = async () => {
      try{
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setListBook(data);
        setListLibrary(data);
      }catch{
        setErrorFetch(true);
      }
    }
      getBook();
  }, []);

  if(errorFetch == true){
    return <ErrorFetch/>
  }

  if(listLibrary[0] == null){
    return(
      <main>
        <Carregando/>
      </main>
    )
  }

  return (
    <main>
      {listBook.map((books) => 
        <div>
          <Image 
            width={107}
            height={154}
            src={books.link}
          />
          <h4>{books.titulo}</h4>
          <p>{books.autor}</p>
          <p>{books.editora}</p>
          <p>{books.preco}</p> 

          <Link href={`/book/${books.id}`}>
              Ver livro
          </Link>
        </div>
      )}
    </main>
  );
}
