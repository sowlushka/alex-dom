let section=document.querySelector("section");
console.log(section);

let h2=section.querySelector("h2");
console.log(h2);

let methodsContent=section.querySelector(".methods-content");

let contents=methodsContent.querySelectorAll("div[id]");
console.log(contents);

let h4Content=Array(contents.length);
let pContent=Array(contents.length);

contents.forEach((selector,index) =>{
    h4Content[index]=selector.querySelector('h4');
    pContent[index]=selector.querySelector('p');
});

console.log(h4Content);
console.log(pContent);