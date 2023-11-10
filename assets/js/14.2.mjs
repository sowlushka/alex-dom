import { navDataArr } from "./nav.mjs";
import { asideData } from "./aside.mjs";


let body=document.querySelector('body');
const logoSrc="./assets/img/logo.png";



let headerHTML=`
    <header>
        <h1>Learn JS</h1>
        <img class="img-logo" src="${logoSrc}">
    </header>
`;


let nav = document.createElement('nav');
//Наполняем панель навигации
navDataArr.forEach(createNavElement);

const contentWrapper=document.createElement('div');
contentWrapper.className="content-wrapper";
const main=document.createElement('main');
const aside=document.createElement('aside');
contentWrapper.append(main);
contentWrapper.append(aside);
main.innerHTML="Временно блок main";
createAsideContant(asideData);


let iframe=document.createElement('iframe');
iframe.src="./assets/articles/art1.txt";
iframe.style.display="none";
body.append(iframe);
let articles=iframe.contentWindow.document;
//let arrH1=articles.querySelectorAll('h1');

body.insertAdjacentHTML('afterbegin',headerHTML);
body.append(nav);
body.append(contentWrapper);




function createNavElement(navData){
//Создать узел из объекта navData в панели навигации
    let div = document.createElement('div');
    div.className = "nav-element";

    let target=navData.target?'target="_blank"':"";
    div.innerHTML=`
        <a href="${navData.link}" ${target}>${navData.caption}</a>
    `;
    nav.append(div);
}

function createAsideContant(asideData){
//Создать контент для aside
    const h3=document.createElement('h3');
    h3.innerHTML=`<a href="${asideData.captionLink}" target="_blank">${asideData.caption}</a>`;
    aside.insertAdjacentElement('afterbegin',h3);
    let ul=document.createElement('ul');


    asideData.contant.forEach(el=>{
        let liHTML=`
                <li><a href="${el.link}" target="_blank">${el.caption}</a></li>
        `;
        ul.insertAdjacentHTML('beforeend',liHTML);
    });
    aside.append(ul);
}