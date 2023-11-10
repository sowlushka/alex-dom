let body=document.querySelector('body');
const logoSrc="./assets/img/logo.png";

const navDataArr=[
    {
        caption: "Задача 1",
        link: "./index1.html"
    },
    {
        caption: "Задача 2",
        link: "./index.html"
    }

];


let headerHTML=`
    <header>
        <h1>Learn JS</h1>
        <img class="img-logo" src="${logoSrc}">
    </header>
`;

let navHTML=`
    <nav>
    </nav>
`;


body.insertAdjacentHTML('afterbegin',headerHTML);
body.insertAdjacentHTML('beforeend', navHTML);

const nav=body.querySelector("nav");

//Наполняем панель навигации
navDataArr.forEach(createNavElement);




function createNavElement(navData){
//Создать узел из объекта navData
    let div = document.createElement('div');
    div.className = "nav-element";
    div.innerHTML=`
        <a href="${navData.link}">${navData.caption}</a>
    `;
    nav.append(div);
}