function removeParentheses(s){

    let fixRegex = /\([^()]*\)|\(|\)/g;
    let result;
    
    while ((result = s.replace(fixRegex, "")) !== s) {
      s = result;
      console.log(s);
    }
      
      return result;
    }
    console.log(removeParentheses("example(unwanted thing)example)"));


//5Head implementation
    const removeParentheses1 = s => s.includes('(') ? removeParentheses1(s.replace(/\([^()]*?\)|\(|\)/g, '')) : s;

    console.log(removeParentheses1("example(unwanted thing)examp)le)"));

