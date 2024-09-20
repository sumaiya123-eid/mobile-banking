document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const result3 = common('input3');
    const pin2 = common ('pin2');
    // console.log(result3 , pin2);
    
    if(pin2 === 1234){
        const myBalance2 = common2('my-balance');
        if(myBalance2<result3){
            alert('you do not have sufficient money.')
            return;
        }
        const newBalance2 = myBalance2 - result3 ;
        document.getElementById('my-balance').innerText = newBalance2 ;

        const p = document.createElement('p');
        p.innerText = `cash out ${result3}Tk. remaining money ${myBalance2}Tk.`;
        document.getElementById('transaction').appendChild(p);
    }
    else{
        alert('failed to cash out.try again later.')
    }
})