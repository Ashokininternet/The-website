import { mainData } from "../data/data.js";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("search-btn");

renderUi();

function renderUi(){
let dataHTML = ``;

      
    mainData.forEach((datas) => {
        dataHTML += `
        <div class="listing">
            <img src="${datas.img}" id="">
            <div class="details">
                <h3>${datas.name}</h3>
                <a href="moredetails.html?id=${datas.id}">View Details</a>
            </div>
        </div>
        `;
    });

    document.querySelector('.MainDisplayDiv').innerHTML = dataHTML;
};

