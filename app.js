let listOf = [
    {
        name: "some think",
        img: "./image/01.webp",
        prix: "20",
        top: "x",
        id: "1",
        sex: "fammel"
    },
    {
        name: "some think",
        img: "./image/02.webp",
        prix: "10",
        top: "",
        id: "2",
        sex: "fammel"
    },
    {
        name: "some think",
        img: "./image/03.webp",
        prix: "25",
        top: "x",
        id: "3",
        sex: "fammel"
    },
    {
        name: "some think",
        img: "./image/04.webp",
        prix: "20",
        top: "",
        id: "4",
        sex: "fammel"
    }, {
        name: "some think",
        img: "./image/05.webp",
        prix: "30",
        top: "x",
        id: "5",
        sex: "fammel"
    },
    {
        name: "arsonal",
        img: "./image/zela.jpg",
        prix: "1003",
        top: "x",
        id: "6",
        sex: "fammel"
    }
]








// 
// 
// 



let bar = document.querySelector(".bar");
let link = document.querySelector(".links")
let icon = document.querySelector(".icon")

bar.addEventListener("click", () => {
    link.classList.toggle("show")

    bar.classList.toggle("hide")

})
// 



let shop = document.querySelector(".shop")

window.addEventListener("DOMContentLoaded", () => {
    sho()
})


function sho() {
    let art = listOf.map((e) => {
        return `<div class="artic raouf"  data-id="${e.id}">
        <div class="img ${e.top}">
            <img src=${e.img} alt="">
        </div>
        <p>article</p>
        <span class="mony">${e.prix} $</span>
        <span class="buy">buy</span>
    </div>`





    });
    art = art.join("")

    shop.innerHTML = art;

    // 
    // 
    // 
    let boom = document.querySelectorAll(".artic")


    boom.forEach((e) => {
        e.addEventListener("click", (e) => {
            let ab = e.currentTarget.dataset.id;

            console.log(ab)

            let z = listOf.filter((e) => {
                return e.id == ab ? e : "";
            });

            let raouf = z[0];


            zbib(raouf)

        })
    })

    // 
    // 
}




console.log()
// `<div class="artic ">
// <div class="img ${e.top}">
//     <img src=${e.img} alt="">
// </div>
// <p>article</p>
// <span>${e.prix}</span>
// <span>buy</span>
// </div>`



// 

function zbib(bvb) {
    let a = document.querySelector(".dark");
    let b = document.querySelector(".articl-buy");
    let img = document.querySelector(".imgg");
    let head = document.querySelector(".head");
    let prix = document.querySelector(".prix");
    let nm = document.querySelector(".num")
    // 
    // 
    // console.log(img)
    a.classList.add("a")
    b.classList.add("a")

    prix.innerHTML = bvb.prix;
    head.innerHTML = bvb.name;
    img.setAttribute("src", bvb.img)
    console.log(img)

    // 
    let ex = document.querySelector(".exty");

    ex.addEventListener("click", () => {
        a.classList.remove("a")
        b.classList.remove("a")
    })
    nm.addEventListener("blur", () => {
        prix.textContent = bvb.prix * nm.value;
    })
}



// console.log(shop.getBoundingClientRect());


