const spellurl = "https://potterapi-fedeperin.vercel.app/en/spells";
const charurl = "https://potterapi-fedeperin.vercel.app/en/characters";
const houseurl = "https://potterapi-fedeperin.vercel.app/en/houses";
const bookurl = "https://potterapi-fedeperin.vercel.app/en/books";

let sdata = [];
let cdata = [];
let hdata = [];
let bdata = [];


async function fetchData() {
    await((async function fetchDatas() {
        const slist = await fetch(spellurl);
        sdata = await slist.json();
        console.log(sdata);

    })());
    await((async function fetchDatac() {
        const clist = await fetch(charurl);
        cdata = await clist.json();
        console.log(cdata);

    })());
    await((async function fetchDatah() {
        const hlist = await fetch(houseurl);
        hdata = await hlist.json();
        console.log(hdata);

    })());
    await((async function fetchDatab() {
        const blist = await fetch(bookurl);
        bdata = await blist.json();
        console.log(bdata);

    })());
};

let sd = document.querySelectorAll("div span");
let character = document.querySelector("#character");
let houseElement = document.querySelector("#house span");
let personalityElement = document.querySelector("#personality span");
let nameElement = document.querySelector("#name span");
let patronusElement = document.querySelector("#patronus span");
let wandElement = document.querySelector("#wand span");
let bsfElement = document.querySelector("#bsf span");
let enemyElement = document.querySelector("#enemy span");
let spellElement = document.querySelector("#spells span");
let favsubElement = document.querySelector("#favsub span");
let bloodStatusElement = document.querySelector("#blood span");
let boggartElement = document.querySelector("#boggart span");
let petElement = document.querySelector("#pets span");
let imgElement = document.querySelector("#img");
// let body = document.querySelector("body");
let h1 = document.querySelector("h1");
// let inp = document.querySelector("#name input");
// let n = inp.value;

window.onload = function () {
    nameElement.innerText = localStorage.getItem("name");
};
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// function cname() {
//     console.log(localStorage.getItem("name"));
//     nameElement.innerText = localStorage.getItem("name");
// }
async function house_personality() {
    var x = hdata[randint(0, hdata.length - 1)];
    console.log(x.house);
    console.log(x.emoji);
    houseElement.innerText = `${x.house} (${x.emoji})`;
    if (x.house == "Gryffindor") {
        imgElement.style.backgroundImage = "url('g-removebg-preview.png')";
        // document.body.style.background = "linear gradient(to top,rgb(116,0,1), rgb(0,0,0))";
        // h1.style.color = "rgb(255, 255, 255)";
        // h1.style.textShadow = "0 0 5px rgb(255, 255, 255)";
        // character.style.color = "rgb(238,186,48)";
        // character.style.textShadow = "0 0 5px rgb(238,186,48)";
    }
    else if (x.house == "Ravenclaw") {
        imgElement.style.backgroundImage = "url('r-removebg-preview.png')";
        // document.body.style.background = "linear gradient(to top, rgb(14,26,64), rgb(0, 0, 0))";
        // h1.style.color = "rgb(255, 255, 255)";
        // h1.style.textShadow = "0 0 5px rgb(255, 255, 255)";
        // character.style.color = "rgb(148,107,45)";
        // character.style.textShadow = "0 0 5px rgb(238,186,48)";
    }
    else if (x.house == "Hufflepuff") {
        imgElement.style.backgroundImage = "url('h-removebg-preview.png')";
        // document.body.style.background = "linear gradient(to top,rgb(255,231,0), rag(255, 255, 255))";
        // h1.style.color = "rgb(0, 0, 0)";
        // h1.style.textShadow = "0 0 5px rgb(255, 255, 255)";
        // character.style.color = "rgb(71,64,0)";
        // character.style.textShadow = "0 0 5px rgb(238,186,48)";
        // sd.forEach((element) => {
        //     element.style.color = "rgb(41, 20, 20)";
        //     element.style.textShadow = "0 0 5px rgb(255, 255, 255)";
        // });
    }
    else if (x.house == "Slytherin") {
        imgElement.style.backgroundImage = "url('s-removebg-preview.png')";
        // document.body.style.background = "linear gradient(to top,rgb(35,88,66), rgb(0, 0, 0))";
        // h1.style.color = "rgb(255, 255, 255)";
        // h1.style.textShadow = "0 0 5px rgb(255, 255, 255)";
        // character.style.color = "rgb(255, 255, 255)";
        // character.style.textShadow = "0 0 5px rgb(255, 255, 255)";
    }
    personalityElement.innerText = personalityByHouse[x.house][randint(0, personalityByHouse[x.house].length - 1)];

}
function patronus() {
    var p = patronuses[randint(0, patronuses.length - 1)];
    console.log(p);
    patronusElement.innerText = p;
}
function wand() {
    var ww = wandWoods[randint(0, wandWoods.length - 1)];
    var wc = wandCores[randint(0, wandCores.length - 1)];
    var wl = wandLengths[randint(0, wandLengths.length - 1)];
    var wf = wandFlexibility[randint(0, wandFlexibility.length - 1)];
    var w = `${ww} Wood with a ${wc} Core ${wl} and ${wf} Flexibility`;
    console.log(w);
    wandElement.innerText = w;
}
function bsf_enemy() {
    var b = cdata[randint(0, cdata.length - 1)].fullName;
    var e = cdata[randint(0, cdata.length - 1)].fullName;
    if (b != e) {
        console.log(b);
        console.log(e);
        bsfElement.innerText = b;
        enemyElement.innerText = e;
    }
}
function spell() {
    var s= sdata[randint(0, sdata.length - 1)];
    var sp = s.spell;
    var su = s.use;
    console.log(sp);
    console.log(su);
    spellElement.innerText = `${sp} (use : ${su})`;
}
function favsub() {
    var f = favoriteSubjects[randint(0, favoriteSubjects.length - 1)];
    console.log(f);
    favsubElement.innerText = f;
}
function blood() {
    var b = bloodStatus[randint(0, bloodStatus.length - 1)];
    console.log(b);
    bloodStatusElement.innerText = b;
}
function boggarts() {
    var b = boggart[randint(0, boggart.length - 1)];
    console.log(b);
    boggartElement.innerText = b;
}
function pet() {
    var p = pets[randint(0, pets.length - 1)];
    console.log(p);
    petElement.innerText = p;
}

(async function fetchSuccessful() {
    await fetchData();
    console.log("Data fetched successfully");
    function appear(callstack) {
        return new Promise((resolve) => {
            setTimeout(() => {
                callstack();
                resolve();
            }, 1000);
        });
    }

    async function generate() {
        // await appear(cname);
        await appear(house_personality);
        await appear(patronus);
        await appear(wand);
        await appear(bsf_enemy);
        await appear(spell);
        await appear(favsub);
        await appear(blood);
        await appear(boggarts);
        await appear(pet);
        console.log("Character generated successfully");
    };
    generate();

})();