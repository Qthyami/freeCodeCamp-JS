//Adding a Default Option in Switch Statements
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
     answer = "Low";
     break;
    case 4:
    case 5:
    case 6: 
     answer = "Mid";
     break;
    case 7:
    case 8:
    case 9:
     answer = "High";
     break;
    
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(sequentialSizes(4));

  //Replacing If Else Chains with Switch
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val) {
      case "bob":
      answer = "Marley";
    break;
      case 42:
      answer = "The Answer";
    break;
      case 1 :
      answer = "There is no #1";
    break;
      case 99 :
      answer = "Missed me by this much!";
    break;
      case 7:
      answer = "Ate Nine";
    break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(chainToSwitch("bob"));


  function checkObj(obj, checkProp) {
    // Only change code below this line
      if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }
  
    // Only change code above this line

    const recordCollection = {
      2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
      },
      2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
      },
      1245: {
        artist: 'Robert Palmer',
        tracks: []
      },
      5439: {
        albumTitle: 'ABBA Gold'
      }
    };
    
    // Only change code below this line
    function updateRecords(records, id, prop, value) {
     if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
      } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
      } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
      } else if (value === "") {
        delete records[id][prop];
      }
      return records;
    }
    
    
  console.log( (updateRecords(recordCollection, 5439, 'artist', 'ABBA')));
  
