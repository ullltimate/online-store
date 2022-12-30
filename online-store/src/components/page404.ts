const page404Layout: string = 
`<div class='wrapper'>
    <h1 class='not-fount font'>PAGE NOT FOUND (404)</h1>
</div>`
export default function page404(){
    let main = <HTMLElement>document.querySelector(".main");
    main.innerHTML = page404Layout;
}