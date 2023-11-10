let body=document.querySelector('body');
const logoSrc="./assets/img/logo.png";


let headerHTML=`
    <header>
        <h1>Learn JS</h1>
        <img class="img-logo" src="${logoSrc}">
    </header>
`;


body.insertAdjacentHTML('afterbegin',headerHTML);