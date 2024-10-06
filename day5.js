/* most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. If there are ties,
return the character that appears earlier in the string.

You can assume that the input string is non-empty. */

const mostFrequentChar = (s) => {

    let frequencyObj = {};
  
    for(let letter of s){
      if(letter in frequencyObj){
        frequencyObj[letter] += 1;
      }else{
        frequencyObj[letter] = 1;
      }
    }
  
    let mostFrequentChar = "";
    let mostFrequent = 0;
  
    for(let [keys,values] of Object.entries(frequencyObj) ){
        if(values > mostFrequent ){
          mostFrequent = values;
          mostFrequentChar = keys;
        }
    }
    return mostFrequentChar;
  };