// Conditions =====>
// condition Statement MUST TAKE VALUE in BOLEANS === true/false

// IF ELSE
if (false) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
  
  // if ELSE CHAINING ===> if compiler gets any condition true .. (IT STOP EXECUTION) == NEVER GO FORWARD
  
  if (false) {
    console.log("A");
  } else if (true) {
    console.log("B");
  } else {
    console.log("C");
  }
  
  // Logical OPERARORS ====> (!) .. (&&) ... (||)
  
  // TRUE : IF ALL CONDITIONS ARE TRUTHY
  if(true && true && true){
      console.log('TRUEXXXX');
  }
  
  // True : if Single Condition Is True
  if(true || false || false){
      console.log('TRUEXXXX');
  }
  
  
  let x = false
  // ! : Reverse
  if(!x){
  console.log('TRUTHY');
  }
  
  
  
  // students == marks === 50 > D , 60 > C , 70 > B , 80 > A
  
  const marks = 60;
  
  if (marks >= 50){
      console.log('D');
  }else if(marks >= 60){
      console.log('C');
  }else if(marks >= 70){
      console.log('B');
  }else{
      console.log('A');
  }
   