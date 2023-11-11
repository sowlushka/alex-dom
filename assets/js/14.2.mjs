import { navDataArr } from "./nav.mjs";
import { asideData } from "./aside.mjs";
import { articles } from "./articles.mjs";

const articleURL="./assets/articles/art1.txt";


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
createAsideContant(asideData);
createMainContant(articles);
const footer=document.createElement('footer');

footer.innerHTML=`
        <p>Сайты для всех</p>
        <p>&#169 McConst &emsp;Тел: <a href="tel:+375257205113">+375(25)7205113</a></p>
`;

/*
fetch(articleURL).
then(response=>response.text()).
then(text=>{
    let h4data=Array.from(text.matchAll(/<h4[^>]*>.*<span[^>]*>(.*)<\/span><\/h4>/g));
    let articlesDataArr=h4data.map(h4=>({caption: h4[1]}));//Возвращаем заголовки статей

    let article=text.match(/notion-text-block.*contenteditable.*>(.*)<\//);
    debugger;
}
);*/


body.insertAdjacentHTML('afterbegin',headerHTML);
body.append(nav);
body.append(contentWrapper);
body.append(footer);




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

function createMainContant(articles){
//Запись статей в блок main
    articles.forEach(article=>{
        let articleNode=document.createElement('article');
        articleNode.innerHTML=`<h3>${article.caption}</h3>`;

        //Формируем статью из параграфов и картинок
        article.p.forEach(p=>{
            if (/<img/.test(p)){
            //Получено изображение
                articleNode.insertAdjacentHTML('beforeend', p);
            }
            else{
            //Текст
                articleNode.insertAdjacentHTML('beforeend', `<p>${p}</p>`);
            }
        });

        main.append(articleNode);//Добавили статью в main
    });
}