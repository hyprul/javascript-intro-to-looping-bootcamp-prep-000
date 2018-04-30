function forLoop(input){
  for(let i = 0; i < 25; i++){
    if(i === 1){
      input.push("I am 1 strange loop.")
    }
    else{
      input.push(`I am ${i} strange loops.`)
    }
  }
}