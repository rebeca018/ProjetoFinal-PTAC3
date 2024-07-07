import Image from "next/image";

export default function Carregando(){
    return(
        <div>
          <Image 
            width={50}
            height={50}
            src="ring-resize-r.svg"
            alt="Carregando"
          />  
        </div>
    );
}