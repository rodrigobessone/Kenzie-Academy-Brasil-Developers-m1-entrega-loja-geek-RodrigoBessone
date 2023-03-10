let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];


const listaPaintings = [];
const listaActions = [];
const painting = document.querySelector('#painting')
const action = document.querySelector('#action')

function separaItens(lista) {
    for (i = 0; i < lista.length; i++) {
        if (lista[i].type == "Painting") {
            listaPaintings.push(lista[i])
        }
        else if (lista[i].type == "Action Figures") {
            listaActions.push(lista[i])
        }
    }
}

separaItens(itens)

for (i = 0; i < listaPaintings.length; i++) {
    let lilistaA = document.createElement("li");
    let imglistaA = document.createElement("img");
    let h3listaA = document.createElement("h3");
    let plistaA = document.createElement("p");


    imglistaA.setAttribute("src", listaPaintings[i].image);
    h3listaA.textContent = listaPaintings[i].name;
    plistaA.innerText = listaPaintings[i].price;


    lilistaA.appendChild(imglistaA);
    lilistaA.appendChild(h3listaA);
    lilistaA.appendChild(plistaA);

    painting.appendChild(lilistaA);
}

for (i = 0; i < listaActions.length; i++) {
    let lilistaB = document.createElement("li");
    let imglistaB = document.createElement("img");
    let h3listaB = document.createElement("h3");
    let plistaB = document.createElement("p");


    imglistaB.setAttribute("src", listaActions[i].image);
    h3listaB.textContent = listaActions[i].name;
    plistaB.innerText = listaActions[i].price;


    lilistaB.appendChild(imglistaB);
    lilistaB.appendChild(h3listaB);
    lilistaB.appendChild(plistaB);

    action.appendChild(lilistaB);
}