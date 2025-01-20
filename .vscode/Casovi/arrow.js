const changeTextColor = (element, color = 'black') => { element.style.color = color; }; 
const changeTextSize = (element, textSize = 24) => { element.style.fontSize = `${textSize}px`; }; 
function changeHeader() { 
    const header = document.getElementById('header'); 
    const textSizeInput = document.getElementById('textSizeInput').value; 
    const colorInput = document.getElementById('colorInput').value;}
    changeTextSize(header, textSizeInput || 28);
     changeTextColor(header, colorInput || 'red');