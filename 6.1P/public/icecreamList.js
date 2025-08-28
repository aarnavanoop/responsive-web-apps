

function buildIcecreamList() {
    const icecreamArray = [
        "Vanilla",
        "Chocolate",
        "Cookies 'n Cream",
        "Strawberry",
        "Chocolate Chip",
        "Mint Chocolate Chip",
        "Chocolate Chip Cookie Dough",
        "Butter Pecan",
        "Birthday Cake",
        "Moose Tracks"
    ];

    const targetDiv = document.getElementById('top_icecreams');


    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }

    const orderedList = document.createElement('ol');

    icecreamArray.forEach(flavour => {
        const listItem = document.createElement('li');
        listItem.textContent = flavour;
        orderedList.appendChild(listItem);
    });

    targetDiv.appendChild(orderedList);
}