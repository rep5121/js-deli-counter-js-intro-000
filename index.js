function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  console.log(katzDeliLine);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }


function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
      let curName = katzDeliLine.shift();
      return `Currently serving ${curName}.`
      }

  else{
      return "There is nobody waiting to be served!"
      }
}

function currentLine(deliLine){
  let resultStr = "The line is currently:"

  if (deliLine.length > 0){
    for( let i = 0; i < deliLine.length; i++){
      let count = 0;
    count = count + 1;
     resultStr + " " + count + "." + deliLine[i] + ",";
     return resultStr;
      }

  }

  else{
  return "The line is currently empty."
  }

}
