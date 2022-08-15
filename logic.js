let input = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons); // Make buttons variable an array by from method

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        
        if(e.target.innerHTML == '='){
            input = input.replace('x', '*');
            // input = eval(input);
            try{
                input = eval(input);
                document.getElementById('number').value = input;
                // input = "";
            }
            catch{
                alert("Invalid Input");
            }
            
        }
        else if(e.target.innerHTML == 'C'){
            input = "";
            document.getElementById('number').value = input;
        }
        else{
            input += e.target.innerHTML;
            document.getElementById('number').value = input;
        }

    })
})

function backspace(){
    let result = document.getElementById('number').value;
    input = result.toString();
    input = input.substring(0, input.length-1);
}