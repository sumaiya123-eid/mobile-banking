document.getElementById('btn').addEventListener('click',function(event){
           event.preventDefault();
        //    const input1 = document.getElementById('input1').value;
        //    const input1Num = parseFloat (input1);
        //    const pin1 = document.getElementById('pin1').value;
        //    console.log(input1Num , pin1);
        const result = common("input1");
        const pinResult = common('pin1');
        

           if(pinResult === 1234){
            //   const myBalance = document.getElementById('my-balance').innerText;
            //   const myBalanceNum = parseFloat(myBalance);
              const result2 = common2('my-balance');
              const newBalance =result2 + result ;
              document.getElementById('my-balance').innerText = newBalance;

              const p = document.createElement('p');
              p.innerText = `add money ${result}Tk.   new balance ${newBalance}Tk.`;
              document.getElementById('transaction').appendChild(p);
              
           }
           else{
            alert('failed to add money.try later.')
           }
           
})