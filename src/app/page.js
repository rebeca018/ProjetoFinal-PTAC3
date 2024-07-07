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

  const searchTitle = (title) => {
    setSearch(title);
    if(title.trim() === ""){
      setListBook(listLibrary);
      return
    }
    const newList = listBook.filter((book) => book.titulo.toUpperCase().trim().includes(search.toUpperCase().trim()))
    setListBook(newList);
  }

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
      <div>
        <input type="text" value={search} placeholder="Pesquise o livro" onChange={(event) => searchTitle(event.target.value)}/>
      </div>

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
