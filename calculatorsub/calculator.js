clrsc = () =>{
    document.getElementById('resultdisp').value="";
}
display = (value) => {
    document.getElementById("resultdisp").value += value;
}
calc = () =>{
    var dig1 = document.getElementById('resultdisp').value;
    var dig2 = eval(dig1);
    document.getElementById('resultdisp').value=dig2;
}
back = () =>{
    var ev = document.getElementById('resultdisp');
    ev.value = ev.value.slice(0,-1);
}
