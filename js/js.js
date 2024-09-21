const clrBox = document.getElementById('clr-box');
const colorCode = document.getElementById('color-code')
const secTion = document.getElementById('section')

document.getElementById('genarate-btn').addEventListener('click',function(){
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    
    const newColor = `rgb(${r}, ${g}, ${b})`;

    clrBox.style.backgroundColor = newColor;

    colorCode.innerText = newColor;
})

document.getElementById('copy-code').addEventListener('click',function(){
    const inputTag = document.createElement('input');
    secTion.appendChild(inputTag)
    inputTag.value = colorCode.innerText;

    inputTag.select();
    document.execCommand('copy');
    secTion.removeChild(inputTag)
    // alert('Color Code Copied')
    if(colorCode.innerText !== ""){
        alert('Color Code Copied!')
    }else{
        alert('Genarate a code to copy!')
    }
})