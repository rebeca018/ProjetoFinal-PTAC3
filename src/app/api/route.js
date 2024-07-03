import { NextResponse } from "next/server";

export const biblioteca = [
    {
        titulo: "Estilhaça-me",
        autor: "Tahereh Mafi",
        editora: "Universo dos Livros",
        genero: "Distopia",
        paginas: 352,
        preco: 39.90,
        link: "https://m.media-amazon.com/images/I/41VestZBywL._SX339_BO1,204,203,200_.jpg",
        id: 1
    },
    {
        titulo: "Legend",
        autor: "Marie Lu",
        editora: "Rocco",
        genero: "Distopia",
        paginas: 256,
        preco: 40.70,
        link: "https://m.media-amazon.com/images/I/61nV3oTC8vL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        id: 2
    },
    {
        titulo: "A rainha vermelha",
        autor: "Victoria Aveyard",
        editora: "Seguinte",
        genero: "Distopia",
        paginas: 424,
        preco: 27.90,
        link: "https://m.media-amazon.com/images/I/41sr7+fVRGL._SX345_BO1,204,203,200_.jpg",
        id: 3
    },
    {
        titulo: "A seleção",
        autor: "Kiera Cass",
        editora: "Seguinte",
        genero: "Distopia",
        paginas: 363,
        preco: 27.93,
        link: "https://m.media-amazon.com/images/I/51zrqIq-fyL._SX330_BO1,204,203,200_.jpg",
        id: 4
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        editora: "Companhia das Letras",
        genero: "Distopia",
        paginas: 416,
        preco: 25.42,
        link: "https://m.media-amazon.com/images/I/51feD87yuEL._SX321_BO1,204,203,200_.jpg",
        id: 5
    },
    {
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        editora: "Biblioteca Azul",
        genero: "Distopia",
        paginas: 216,
        preco: 31.78,
        link: "https://m.media-amazon.com/images/I/41PVVpQf-sL._SX322_BO1,204,203,200_.jpg",
        id: 6
    },
    {
        titulo: "Admirável mundo novo",
        autor: "Aldous Leornad Huxley",
        editora: "Biblioteca Azul",
        genero: "Distopia",
        paginas: 312,
        preco: 35.04,
        link: "https://m.media-amazon.com/images/I/41IKTYiymKL._SX334_BO1,204,203,200_.jpg",
        id: 7
    },
    {
        titulo: "Eu, Robô",
        autor: "Isaac Asimov",
        editora: "Editora Aleph",
        genero: "Distopia",
        paginas: 320,
        preco: 39.79,
        link: "https://m.media-amazon.com/images/I/414QJOKvD+L._SX328_BO1,204,203,200_.jpg",
        id: 8
    },
    {
        titulo: "A Máquina do Tempo",
        autor: "H. G. Wells",
        editora: "Suma",
        genero: "Distopia",
        paginas: 176,
        preco: 32.44,
        link: "https://m.media-amazon.com/images/I/61swVeECVYL._SX340_BO1,204,203,200_.jpg",
        id: 9
    },
    {
        titulo: "Laranja mecânica",
        autor: "Anthony Burgess",
        editora: "Editora Aleph",
        genero: "Distopia",
        paginas: 288,
        preco: 30.90,
        link: "https://m.media-amazon.com/images/I/51cFreMs86L._SX347_BO1,204,203,200_.jpg",
        id: 10
    },
    {
        titulo: "O príncipe cruel",
        autor: "Holly Black",
        editora: "Galera",
        genero: "Fantasia",
        paginas: 322,
        preco: 41.89,
        link: "https://m.media-amazon.com/images/I/51BSHmTVwsS._SX335_BO1,204,203,200_.jpg",
        id: 11
    },
    {
        titulo: "A vida invisível de Addie LaRue",
        autor: "V.E. Schwab",
        editora: "Galera",
        genero: "Fantasia",
        paginas: 504,
        preco: 39.89,
        link: "https://m.media-amazon.com/images/I/41kJVFM0AfL._SX335_BO1,204,203,200_.jpg",
        id: 12
    },
    {
        titulo: "Um tom mais escuro de magia",
        autor: "V.E. Schwab",
        editora: "Record",
        genero: "Fantasia",
        paginas: 420,
        preco: 41.89,
        link: "https://m.media-amazon.com/images/I/51YuNhd4Y6L._SX334_BO1,204,203,200_.jpg",
        id: 13
    },
    {
        titulo: "Six of crows: Sangue e mentiras",
        autor: "Leigh Bardugo",
        editora: "Gutenberg",
        genero: "Fantasia",
        paginas: 376,
        preco: 37.32,
        link: "https://m.media-amazon.com/images/I/51ku0tEgIcL._SY346_.jpg",
        id: 14
    },
    {
        titulo: "De sangue e cinzas",
        autor: "Jennifer L. Armentrout",
        editora: "Galera",
        genero: "Fantasia",
        paginas: 588,
        preco: 33.20,
        link: "https://m.media-amazon.com/images/I/5150My6ZzUL._SX342_BO1,204,203,200_.jpg",
        id: 15
    },
    {
        titulo: "Harry Potter e a pedra filosofal",
        autor: "J.K. Rowling",
        editora: "Rocco",
        genero: "Fantasia",
        paginas: 208,
        preco: 24.90,
        link: "https://m.media-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg",
        id: 16
    },
    {
        titulo: "Percy Jackson: O Ladrão de Raios",
        autor: "Rick Riordan",
        editora: "Intrínseca",
        genero: "Fantasia",
        paginas: 400,
        preco: 43.91,
        link: "https://m.media-amazon.com/images/I/41lwbj-W2yL._SY498_BO1,204,203,200_.jpg",
        id: 17
    },
    {
        titulo: "Dance of Thieves",
        autor: "Mary Pearson",
        editora: "Darkside",
        genero: "Fantasia",
        paginas: 512,
        preco: 38.90,
        link: "https://m.media-amazon.com/images/I/516ijqpzHlL.jpg",
        id: 18
    },
    {
        titulo: "Caraval",
        autor: "Stephanie Garber",
        editora: "Gutenberg",
        genero: "Fantasia",
        paginas: 352,
        preco: 45.40,
        link: "https://m.media-amazon.com/images/I/81HB-DJUVHL.jpg",
        id: 19
    },
    {
        titulo: "Lendários",
        autor: "Tracy Deonn",
        editora: "Intrínseca",
        genero: "Fantasia",
        paginas: 592,
        preco: 56.32,
        link: "https://m.media-amazon.com/images/I/51wSORx78VL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        id: 20
    },
    {
        titulo: "Assassinato no Expresso do Oriente",
        autor: "Agatha Christie",
        editora: "HarperCollins",
        genero: "Mistério",
        paginas: 240,
        preco: 29.86,
        link: "https://m.media-amazon.com/images/I/51fLtg6MDIL._SX322_BO1,204,203,200_.jpg",
        id: 21
    },
    {
        titulo: "Morte no Nilo",
        autor: "Agatha Christie",
        editora: "HarperCollins",
        genero: "Mistério",
        paginas: 320,
        preco: 29.90,
        link: "https://m.media-amazon.com/images/I/51uUy7ogDuL._SX324_BO1,204,203,200_.jpg",
        id: 22
    },
    {
        titulo: "O Caso dos Dez Negrinhos",
        autor: "Agatha Christie",
        editora: "HarperCollins",
        genero: "Mistério",
        paginas: 288,
        preco: 26.90,
        link: "https://m.media-amazon.com/images/I/51XUMW7eL8L._SX323_BO1,204,203,200_.jpg",
        id: 23
    },
    {
        titulo: "O Inimigo Secreto",
        autor: "Agatha Christie",
        editora: "HarperCollins",
        genero: "Mistério",
        paginas: 272,
        preco: 27.97,
        link: "https://m.media-amazon.com/images/I/51vcXKXW6ZL._SX322_BO1,204,203,200_.jpg",
        id: 24
    },
    {
        titulo: "Uma mulher no escuro",
        autor: "Raphael Montes",
        editora: "Companhia das Letras",
        genero: "Mistério",
        paginas: 256,
        preco: 39.90,
        link: "https://m.media-amazon.com/images/I/514k2x+gRUL._SX331_BO1,204,203,200_.jpg",
        id: 25
    },
    {
        titulo: "Joyland",
        autor: "Stephen King",
        editora: "Suma",
        genero: "Mistério",
        paginas: 240,
        preco: 29.18,
        link: "https://m.media-amazon.com/images/I/51SxeJJgwEL._SX346_BO1,204,203,200_.jpg",
        id: 26
    },
    {
        titulo: "A paciente silenciosa",
        autor: "Alex Michaelides",
        editora: "Record",
        genero: "Mistério",
        paginas: 364,
        preco: 38.79,
        link: "https://m.media-amazon.com/images/I/413th2NQc8L._SX338_BO1,204,203,200_.jpg",
        id: 27
    },
    {
        titulo: "O Homem de Giz",
        autor: "C. J. Tudor",
        editora: "Intrínseca",
        genero: "Mistério",
        paginas: 272,
        preco: 39.10,
        link: "https://m.media-amazon.com/images/I/31KPmUV6FBL._SY498_BO1,204,203,200_.jpg",
        id: 28
    },
    {
        titulo: "O Colecionador",
        autor: "John Fowles",
        editora: "Darkside",
        genero: "Mistério",
        paginas: 256,
        preco: 47.90,
        link: "https://m.media-amazon.com/images/I/41uDEyaWOiL.jpg",
        id: 29
    },
    {
        titulo: "Verity",
        autor: "Colleen Hoover",
        editora: "Galera",
        genero: "Mistério",
        paginas: 320,
        preco: 33.24,
        link: "https://m.media-amazon.com/images/I/51RwC79Ai8L._SX324_BO1,204,203,200_.jpg",
        id: 30
    },
    {
        titulo: "A hipótese do amor",
        autor: "Ali Hazelwood",
        editora: "Editora Arqueiro",
        genero: "Romance",
        paginas: 336,
        preco: 42.31,
        link: "https://m.media-amazon.com/images/I/41yv3AcAtjL._SX346_BO1,204,203,200_.jpg",
        id: 31
    },
    {
        titulo: "Heartstopper: Dois garotos, um encontro (vol. 1)",
        autor: "Alice Oseman",
        editora: "Seguinte",
        genero: "Romance",
        paginas: 288,
        preco: 39.89,
        link: "https://m.media-amazon.com/images/I/51wx3A+5s6L._SX347_BO1,204,203,200_.jpg",
        id: 32
    },
    {
        titulo: "Os sete maridos de Evelyn Hugo",
        autor: "Taylor Jenkins Reid",
        editora: "Paralela",
        genero: "Romance",
        paginas: 360,
        preco: 31.40,
        link: "https://m.media-amazon.com/images/I/41xVhz5sL1L._SX346_BO1,204,203,200_.jpg",
        id: 33
    },
    {
        titulo: "É assim que acaba",
        autor: "Colleen Hoover",
        editora: "Galera",
        genero: "Romance",
        paginas: 368,
        preco: 34.88,
        link: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SX322_BO1,204,203,200_.jpg",
        id: 34
    },
    {
        titulo: "É assim que começa",
        autor: "Colleen Hoover",
        editora: "Galera",
        genero: "Romance",
        paginas: 336,
        preco: 49.90,
        link: "https://m.media-amazon.com/images/I/51jiQtSEwDL._SX327_BO1,204,203,200_.jpg",
        id: 35
    },
    {
        titulo: "Malibu renasce",
        autor: "Taylor Jenkins Reid",
        editora: "Paralela",
        genero: "Romance",
        paginas: 360,
        preco: 29.90,
        link: "https://m.media-amazon.com/images/I/41QbyDiPOoL._SX346_BO1,204,203,200_.jpg",
        id: 36
    },
    {
        titulo: "Todo esse tempo",
        autor: "Rachael Lippincott",
        editora: "Alt",
        genero: "Romance",
        paginas: 352,
        preco: 28.79,
        link: "https://m.media-amazon.com/images/I/51Xy0Ny5f0L._SX331_BO1,204,203,200_.jpg",
        id: 37
    },
    {
        titulo: "Oceano entre nós",
        autor: "Tahereh Mafi",
        editora: "Universo dos Livros",
        genero: "Romance",
        paginas: 304,
        preco: 29.60,
        link: "https://m.media-amazon.com/images/I/51sK9aClAKS._SX339_BO1,204,203,200_.jpg",
        id: 38
    },
    {
        titulo: "Uma farsa de amor na Espanha",
        autor: "Elena Armas",
        editora: "Editora Arqueiro",
        genero: "Romance",
        paginas: 448,
        preco: 47.90,
        link: "https://m.media-amazon.com/images/I/41hgFAWrMpL._SX345_BO1,204,203,200_.jpg",
        id: 39
    },
    {
        titulo: "Aristóteles e Dante descobrem os segredos do Universo",
        autor: "Benjamin Alire Sáenz",
        editora: "Seguinte",
        genero: "Romance",
        paginas: 392,
        preco: 27.93,
        link: "https://m.media-amazon.com/images/I/51ZQeMWMiCS._SX331_BO1,204,203,200_.jpg",
        id: 40
    },
    {
        titulo: "Mansão Gallant + BRINDES",
        autor: "V.E. Schwab",
        editora: "Galera",
        genero: "Fantasia",
        paginas: 320,
        preco: 47.90,
        link: "https://m.media-amazon.com/images/I/91dON4cD4dL.jpg",
        id: 41
    },
    {
        titulo: "Livro da Noite + BRINDES",
        autor: "Holly Black",
        editora: "Galera",
        genero: "Fantasia",
        paginas: 346,
        preco: 48.50,
        link: "https://m.media-amazon.com/images/I/916Vg5YllaL.jpg",
        id: 42
    },
    {
        titulo: "Jogos de herança: 1",
        autor: "Jennifer Lynn Barnes",
        editora: "Alt",
        genero: "Mistério",
        paginas: 432,
        preco: 29.90,
        link: "https://m.media-amazon.com/images/I/51ovP7c4dlS._SX325_BO1,204,203,200_.jpg",
        id: 43
    },
    {
        titulo: "O herdeiro perdido: 2",
        autor: "Jennifer Lynn Barnes",
        editora: "Alt",
        genero: "Mistério",
        paginas: 432,
        preco: 39.90,
        link: "https://m.media-amazon.com/images/I/5110Jo63ZlL._SX324_BO1,204,203,200_.jpg",
        id: 44
    },
    {
        titulo: "A aposta final: 3",
        autor: "Jennifer Lynn Barnes",
        editora: "Alt",
        genero: "Mistério",
        paginas: 448,
        preco: 41.40,
        link: "https://m.media-amazon.com/images/I/51coSeuFQBL._SX331_BO1,204,203,200_.jpg",
        id: 45
    },
    {
        titulo: "A Biblioteca da Meia-Noite",
        autor: "Matt Haig",
        editora: "Bertrand Brasil",
        genero: "Mistério",
        paginas: 308,
        preco: 26.19,
        link: "https://m.media-amazon.com/images/I/51kAYMwbQIL._SX342_BO1,204,203,200_.jpg",
        id: 46
    },
    {
        titulo: "Até o verão terminar",
        autor: "Colleen Hoover",
        editora: "Galera",
        genero: "Romance",
        paginas: 336,
        preco: 26.48,
        link: "https://m.media-amazon.com/images/I/51ccTKC7y1L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        id: 47
    },
    {
        titulo: "A razão do amor",
        autor: "Ali Hazelwood",
        editora: "Editora Arqueiro",
        genero: "Romance",
        paginas: 336,
        preco: 41.20,
        link: "https://m.media-amazon.com/images/I/51nNIpNyhvL._SX346_BO1,204,203,200_.jpg",
        id: 48
    },
    {
        titulo: "Lady Killers",
        autor: "Tori Telfer",
        editora: "Darkside",
        genero: "Mistério",
        paginas: 384,
        preco: 39.99,
        link: "https://m.media-amazon.com/images/I/71CS5HmIjaL.jpg",
        id: 49
    },
    {
        titulo: "A maldição do mar",
        autor: "Shea Ernshaw",
        editora: "Galera",
        genero: "Fantasia",
        paginas: 320,
        preco: 38.21,
        link: "https://m.media-amazon.com/images/I/51PnRULP55L._SX335_BO1,204,203,200_.jpg",
        id: 50
    },
    {
        titulo: "Daisy Jones and The Six",
        autor: "Taylor Jenkins Reid",
        editora: "Paralela",
        genero: "Romance",
        paginas: 360,
        preco: 25.99,
        link: "https://m.media-amazon.com/images/I/51zH8sO2fcL._SX346_BO1,204,203,200_.jpg",
        id: 51
    },
    {
        titulo: "A rebelde do deserto",
        autor: "Alwyn Hamilton",
        editora: "Seguinte",
        genero: "Fantasia",
        paginas: 288,
        preco: 21.90,
        link: "https://m.media-amazon.com/images/I/517xxR-MbxS._SX346_BO1,204,203,200_.jpg",
        id: 52
    },
    {
        titulo: "Box O castelo animado",
        autor: "Diana Wynne Jones",
        editora: "Galera",
        genero: "Fantasia",
        paginas: 1056,
        preco: 108.38,
        link: "https://m.media-amazon.com/images/I/51KKPCToICL._SX351_BO1,204,203,200_.jpg",
        id: 53
    },
    {
        titulo: "Coleção Agatha Christie - Box 1",
        autor: "Agatha Christie",
        editora: "HarperCollins",
        genero: "Mistério",
        paginas: 640,
        preco: 69.89,
        link: "https://m.media-amazon.com/images/I/51iOYkdVGfL._SX391_BO1,204,203,200_.jpg",
        id: 54
    },
    {
        titulo: "Renegados",
        autor: "Marissa Meyer",
        editora: "Rocco Jovens Leitores",
        genero: "Distopia",
        paginas: 512,
        preco: 59.92,
        link: "https://m.media-amazon.com/images/I/51u9nNRFB7L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        id: 55
    }
    
    
];

export async function GET(){
    return NextResponse.json(biblioteca)
}