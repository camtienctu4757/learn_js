
function changeColor(){
    let color_code ='';
    const hex_code = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(let i= 0;i<6;i++){
        color_code+= hex_code[Math.floor(Math.random()*hex_code.length)];
    }
    color_code = '#' + color_code;
    document.getElementsByTagName('body')[0].style.background = color_code;
    document.getElementById('hex-code').innerHTML = color_code;
}

