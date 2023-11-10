let body=document.querySelector('body');
const logoSrc="./assets/img/logo.png";

const navDataArr=[
    {
        caption: "Задача 1",
        link: "./index1.html",
        target: true
    },
    {
        caption: "Тема",
        link: "https://nwillis.notion.site/14-DOM-507f77a7a0b34c278c56dc6890b03173",
        target: true
    },
    {
        caption: "Задача 2",
        link: "./index.html",
        target: false
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

    let target=navData.target?'target="_blank"':"";
    div.innerHTML=`
        <a href="${navData.link}" ${target}>${navData.caption}</a>
    `;
    nav.append(div);
}