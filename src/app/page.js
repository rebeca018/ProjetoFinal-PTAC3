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

  const ordenandoAz = () => {
    const newList = [...listBook].sort( (a,b) => 
      a.titulo.localeCompare(b.titulo)
    );
    setListBook(newList);
  }

  const ordenandoZa = () => {
    let newList = [...listBook].sort( (a,b) => 
      a.titulo.localeCompare(b.titulo)
    );
    newList = newList.reverse();
    setListBook(newList);
  }
  
  const precoMenor = () => {
    let newList = [...listBook].sort( (a,b) => 
      a.preco - b.preco
    );
    setListBook(newList);
  }

  const precoMaior = () => {
    let newList = [...listBook].sort( (a,b) => 
      a.preco - b.preco
    );
    newList = newList.reverse();
    setListBook(newList);
  }

  const ordenandoEditoraAz = () => {
    const newList = [...listBook].sort( (a,b) => 
      a.editora.localeCompare(b.editora)
    );
    setListBook(newList);
  }

  const ordenandoEditoraZa = () => {
    let newList = [...listBook].sort( (a,b) => 
      a.editora.localeCompare(b.editora)
    );
    newList = newList.reverse();
    setListBook(newList);
  }

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
      <main className={"carregando"}>
        <Carregando/>
      </main>
    )
  }

  return (
    <main className={"main"}>
      <div className={"f"}>
        <div className={"filtros"}>
            <input className={"input"} type="text" value={search} placeholder="Pesquise o livro" onChange={(event) => searchTitle(event.target.value)}/>
          <button className={"botao"} onClick={ordenandoAz}>A-Z</button>
          <button className={"botao"} onClick={ordenandoZa}>Z-A</button>
          <button className={"botao"} onClick={precoMenor}>Preço: menor para o maior</button>
          <button className={"botao"} onClick={precoMaior}>Preço: maior para o menor</button>
          <button className={"botao"} onClick={ordenandoEditoraAz}>Editora: A-Z</button>
          <button className={"botao"} onClick={ordenandoEditoraZa}>Editora: Z-A</button>
        </div>
      </div>

      {listBook.map((books) => 
        <div className={"book-card"}>
          <div className={"book-card-img-container"}>
          <Image 
            width={107}
            height={154}
            src={books.link}
            clasName={"book-card-img"}
          />
          </div>
          
          <div className={"card-details"}>
            <h4 className={"book-card-h4"}>{books.titulo}</h4>
            <p className={"book-card-p"}>Autor: {books.autor}</p>
            <p className={"book-card-p"}>Editora: {books.editora}</p>
            <p className={"book-card-p"}>R$ {books.preco}</p> 
          </div>

          <button className={"button"}>
            <Link href={`/book/${books.id}`} className={"button-content"}>
                Ver livro
            </Link>
          </button>  
        </div>
      )}
    </main>
  );
}
