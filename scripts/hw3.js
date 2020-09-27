var lowers   = 'abcdefghijklmnopqrstuvwxyz';
var uppers   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers  = '0123456789';
var specials = '@#$%&!?';
var length   = '8';
var bank     = '';
var pass     = '';
var Display  = document.getElementById('display');
var Prompts  = document.getElementById('prompts');
var Button   = document.getElementById("start");
var charNum  = document.getElementById('charnum');

Button.addEventListener('click', function(){
    var input = prompt('Enter Password Length, 8-15 Chars');
    if (input != null && input>=8 && input<=15){
        charNum.value = input;
        length = input;
        Prompts.value = '';
    }else{
        Prompts.value = 'Invalid. Press Start to Restart';
    }
    if (charNum.value != null && input>=8 && input<=15){
        var input2 = prompt ("Include UpperCase Chars? Enter 'Y' or 'N'");
        if (input2 != null && input2 ==='y'){
            document.getElementById('led2').style.backgroundColor = 'green';
            bank = bank + uppers;
        } else if (input2 != null && input2 ==='n'){
            document.getElementById('led2').style.backgroundColor = 'red';
            bank = bank + lowers;
        }else{
            Prompts.value = "Invalid. Press Start to Restart";
        }
    }
    
    if (input2 != null){
        var input3 = prompt ('Include Numbers? Enter "Y" or "N"');
        if (input3 != null && input3 ==='y'){
            document.getElementById('led3').style.backgroundColor = 'green';
            bank = bank + numbers;
        } else if (input3 != null && input3 ==='n'){
            document.getElementById('led3').style.backgroundColor = 'red';
        }else{
            Prompts.value = "Invalid. Press Start to Restart";
        }
    }
    if (input3 != null){
        var input4 = prompt ('Include Numbers? Enter "Y" or "N"');
        if (input3 != null && input4 ==='y'){
            document.getElementById('led4').style.backgroundColor = 'green';
            bank = bank + specials;
        } else if (input4 != null && input4 ==='n'){
            document.getElementById('led4').style.backgroundColor = 'red';
        }else{
            Prompts.value = "Invalid. Press Start to Restart";
        }
    } 


    for (i = 0; i <= length; i++) { 
        var char = Math.floor(Math.random() 
                    * bank.length);
        pass += bank.charAt(char);
    }  
    Display.value = pass;
});


