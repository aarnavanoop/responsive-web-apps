function processText() {
    const inputText = document.getElementById('exampleFormControlTextarea1').value;
    const searchWord = document.getElementById('searchWord').value;
    const subStringLength = parseInt(document.getElementById('numberCharacters').value, 10);

    if (inputText.trim() === "" || searchWord.trim() === "") {
        alert("Ensure you input a value in both fields!");
        return;
    }

    document.getElementById('strResult1').innerText = inputText.length;
    document.getElementById('strResult2').innerText = inputText.toUpperCase();
    document.getElementById('strResult3').innerText = inputText.toLowerCase();

    const lowerInputText = inputText.toLowerCase();
    const lowerSearchWord = searchWord.toLowerCase();
    document.getElementById('strResult4').innerText = lowerInputText.indexOf(lowerSearchWord);

    document.getElementById('strResult5').innerText = inputText.slice(0, subStringLength);
    document.getElementById('strResult6').innerText = inputText.slice(-subStringLength);

    document.getElementById('searchTerm').innerText = searchWord;
    document.getElementById('numberSubstringCharactersStart').innerText = subStringLength;
    document.getElementById('numberSubstringCharactersEnd').innerText = subStringLength;
}

function clearText() {
    document.getElementById('exampleFormControlTextarea1').value = '';
    document.getElementById('searchWord').selectedIndex = 0;
    document.getElementById('numberCharacters').value = 10;

    document.getElementById('strResult1').innerText = '';
    document.getElementById('strResult2').innerText = '';
    document.getElementById('strResult3').innerText = '';
    document.getElementById('strResult4').innerText = '';
    document.getElementById('strResult5').innerText = '';
    document.getElementById('strResult6').innerText = '';

    document.getElementById('searchTerm').innerText = '???';
    document.getElementById('numberSubstringCharactersStart').innerText = '_';
    document.getElementById('numberSubstringCharactersEnd').innerText = '_';
}