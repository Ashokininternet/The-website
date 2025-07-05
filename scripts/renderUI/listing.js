import { mainData } from "../data/data.js";


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

