function sjitclg(message,abc){
    console.log(message);
  abc()
}
function callbacksjit(){
    console.log("Welcome back to sjit");
}
sjitclg("Welcome to sjit",callbacksjit);
