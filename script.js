console.log('🟥 🟦 🟩 🟨');

function onReady (){




let redButton = document.getElementById('red-btn');
let blueButton = document.getElementById('blue-btn');
let greenButton = document.getElementById('green-btn');
let yellowButton = document.getElementById('yellow-btn');

}



function onRedClick(){

    let theDivIWantToAddTo = document.querySelector('#blocks');

    let redButtonCount = document.querySelector('#red-count');

    // Take the div element and replace the space with red block
    theDivIWantToAddTo.innerHTML += `<div onclick='deleteRedBlock(event)' class="block red-fill"></div>`;

    redButtonCount.textContent = Number(redButtonCount.textContent) + 1;
}

function onBlueClick(){

    let theDivIWantToAddTo = document.querySelector('#blocks');

    let blueButtonCount = document.querySelector('#blue-count');

    theDivIWantToAddTo.innerHTML += `<div onclick='deleteBlueBlock(event)' class="block blue-fill"></div>`;

    blueButtonCount.textContent = Number(blueButtonCount.textContent) + 1;
}

function onGreenClick(){

    let theDivIWantToAddTo = document.querySelector('#blocks');

    let greenButtonCount = document.querySelector('#green-count');

    theDivIWantToAddTo.innerHTML += `<div onclick='deleteGreenBlock(event)' class="block green-fill"></div>`;

    greenButtonCount.textContent = Number(greenButtonCount.textContent) + 1;
}

function onYellowClick(){

    let theDivIWantToAddTo = document.querySelector('#blocks');

    let yellowButtonCount = document.querySelector('#yellow-count');

    theDivIWantToAddTo.innerHTML += `<div onclick='deleteYellowBlock(event)' class="block yellow-fill"></div>`;

    yellowButtonCount.textContent = Number(yellowButtonCount.textContent) + 1;
}



// function deleteRedBlock(event){


//     event.target.remove();

// }

// function deleteBlueBlock(event){


//     event.target.remove();
// }


// function deleteGreenBlock(event){


//     event.target.remove();
// }


// function deleteYellowBlock(event){


//     event.target.remove();
// }


onReady ();