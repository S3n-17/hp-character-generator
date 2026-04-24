const spellurl="https://potterapi-fedeperin.vercel.app/en/spells";
const charurl="https://potterapi-fedeperin.vercel.app/en/characters";
const houseurl="https://potterapi-fedeperin.vercel.app/en/houses";
const bookurl="https://potterapi-fedeperin.vercel.app/en/books";

(async function fetchDatas(){
    let slist = await fetch(spellurl);
    let sdata = await slist.json();
    console.log(sdata);
})();
(async function fetchDatac(){
    let clist = await fetch(charurl);
    let cdata = await clist.json();
    console.log(cdata);
})();
(async function fetchDatah(){
    let hlist = await fetch(houseurl);
    let hdata = await hlist.json();
    console.log(hdata);
})();
(async function fetchDatab(){
    let blist = await fetch(bookurl);
    let bdata = await blist.json();
    console.log(bdata);
})();

