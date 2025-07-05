import { mainData } from "../data/data.js";
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const webId = getUrlParam('id');

if (webId) {
    function renderdataUi() {
        const dataToRender = mainData.find(data => data.id === webId); // Find the data with this ID

        let dataHTML = '';
        
        if (dataToRender) {
            // Render the specific data
            dataHTML = `
                <!-- Hero Image -->
                <img src="${dataToRender.img}" class="hero-image">
                
                <!-- Description -->
                <p class="description">
                    ${dataToRender.pquote}
                </p>
                <div class="image-scroll-container">
                    <div class="scroll-item">
                        <img src="${dataToRender.things.i1}" alt="Image 1">
                        <p>${dataToRender.things.ip1}</p>
                    </div>
                    <div class="scroll-item">
                        <img src="${dataToRender.things.i2}" alt="Image 2">
                        <p>${dataToRender.things.ip2}</p>
                    </div>
                    <div class="scroll-item">
                        <img src="${dataToRender.things.i3}" alt="Image 3">
                        <p>${dataToRender.things.ip3}</p>
                    </div>
                </div>
            `;
        } else {
            dataHTML = '<p>Data not found!</p>';
        }
        
        document.querySelector('.main-container').innerHTML = dataHTML;
    };
    renderdataUi();
}



// if (mainData[id]){
//     function renderdataUi() {
//         let dataHTML = ``;
    
//         mainData.forEach((data) => {
//             dataHTML += `
//              <!-- Hero Image -->
//             <img src="${data.img}" class="hero-image">
            
//             <!-- Description -->
//             <p class="description">
//                 ${data.pquote}
//             </p>
//             <div class="image-scroll-container">
//                 <div class="scroll-item">
//                     <img src="${data.things.i1}" alt="Image 1">
//                     <p>${data.things.ip1}</p>
//                 </div>
//                 <div class="scroll-item">
//                     <img src="${data.things.i2}" alt="Image 2">
//                     <p>${data.things.ip2}</p>
//                 </div>
//                 <div class="scroll-item">
//                     <img src="${data.things.i3}" alt="Image 2">
//                     <p>${data.things.ip3}</p>
//                 </div>
//             </div>
//             `;
//         });
    
//         document.querySelector('.main-container').innerHTML = dataHTML;
//     };
//     renderdataUi();
// }

// console.log(mainData);  // Check if mainData is being correctly imported
