function pigIt(str){
    const regex = /\b(\w)(\w*)\b/g;
    return str.replace(regex, "$2$1ay");
   }

   //превращает ('Pig latin is cool') в ('igPay atinlay siay oolcay')