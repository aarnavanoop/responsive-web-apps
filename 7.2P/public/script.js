let clickCounter = 0;
const startButton = document.getElementById('startButton');
const outputDiv = document.getElementById('outputDiv');

function handleButtonClick() {
    clickCounter++;
    
    if (clickCounter > 5) {
        outputDiv.style.display = 'none';
        startButton.value = 'Click to Re-start';
        clickCounter = 0;
    } else {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-AU', { timeZoneName: 'long' });
        const dateString = now.toDateString();

        outputDiv.style.display = 'block';
        startButton.value = `Try again... Pressed ${clickCounter} times`;
        
        outputDiv.innerHTML = `
            <h4>Well done, you clicked the button!</h4>
            <ul>
                <li>At time: ${timeString}</li>
                <li>On date: ${dateString}</li>
            </ul>
            <p>Move your cursor/mouse over this div element to change the background colour to violet.</p>
        `;
    }
}

function handleMouseOver() {
    outputDiv.style.backgroundColor = 'violet';
}

function handleMouseOut() {
    outputDiv.style.backgroundColor = 'transparent';
}

startButton.addEventListener('click', handleButtonClick);
outputDiv.addEventListener('mouseover', handleMouseOver);
outputDiv.addEventListener('mouseout', handleMouseOut);