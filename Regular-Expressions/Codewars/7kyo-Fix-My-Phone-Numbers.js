

function isItANum(str) {
    let regex1= /^0[0-9]{10}$/;
     
    const digits = str.replace(/\D/g,"");
    
    if(regex1.test(digits)){
        return digits;
    }

    else return "Not a phone number";
    }
    console.log(isItANum("0V i M6588378857"))
//пацанский способ
    const isItANum1 = str =>(str.replace(/\D/g,'').match(/^0\d{10}$/) || ['Not a phone number'])[0];;
    console.log(isItANum1("0V i M6588378857"));