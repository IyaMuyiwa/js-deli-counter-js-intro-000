var katzDeliLine = []; //at the beginning of the day the deli line is empty
var n = 0 ; //accepts each new customer's name

function takeANumber (katzDeliLine) {
//let n = 0
 n++
katzDeliLine.push(n); //adds new customer to array
 return ("Welcome, you are number "+ n +" in line.");
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
  for (let i = 0;i<katzDeliLine.length;i++) {
      var current = katzDeliLine.shift();
      return "Currently serving " + current +".";
}
}


  function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "The line is currently empty."}
  else {
  var serviceposition = [];
  for (let i = 0; i<katzDeliLine.length;i++) {
  //  var position = `${i+1}` + ". " + katzDeliLine[i];
     var position = `${i+1}. ${katzDeliLine[i]}`;
    serviceposition.push(position);
      }
    return "The line is currently: " + serviceposition.join(", ");
 }
  }
