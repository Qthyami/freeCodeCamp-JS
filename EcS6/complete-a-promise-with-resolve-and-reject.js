const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
//Handle a Fulfilled Promise with then
makeServerRequest.then(result =>{
  console.log(result);
  }
  );
  //Handle a Rejected Promise with catch
  makeServerRequest.catch(
    error => {
      console.log(error);
    }
    );