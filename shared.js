function common(id){
    const inputField = document.getElementById(id).value ;
    const inputFieldNum = parseFloat (inputField);
    return inputFieldNum ;
}

function common2(id){
    const textField = document.getElementById(id).innerText;
    const textFieldNum = parseFloat(textField);
    return textFieldNum;
}
 function common3(id){
    document.getElementById('div1').classList.add('hidden');
    document.getElementById('div2').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
 }