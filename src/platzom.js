export default function platzom(str){
  let traslations = str;

  if(str.toLowerCase().endsWith('ar')){
    traslations = str.slice(0,-2);
  }

  if(str.toLowerCase().startsWith('z')){
    traslations += 'pe';
  }

  const length = traslations.length;
  if(length >= 10){
    const primera = traslations.slice(0,Math.round(length/2));
    const segunda = traslations.slice(Math.round(length / 2));
    traslations = `${primera}-${segunda}`
  }

  const reverse = (str) => str.split('').reverse().join('');

  function minMay(str){
    let arrayStr = str.split('');
    for(let i = 0; i < arrayStr.length; i++){
      arrayStr[i]=((i+1) % 2 == 1)? arrayStr[i].toUpperCase(): arrayStr[i].toLowerCase();
    }
    return arrayStr.join('');
  }

  if(str == reverse(str)){
    return minMay(str);
  }
  return traslations;
}