function convertToRoman(num) {
    let str = '';
    let k = 0;
    let roNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    
  /*for (let i of Object.keys(roNum)) {
      console.log(roNum[i]);
    }*/
  
  for (let i of Object.keys(roNum)) {
      k = Math.floor(num / roNum[i]);
      num -= k * roNum[i];
      str += i.repeat(k);
    }
  
    
    
  
    return str;
  }
  
  console.log(convertToRoman(1000));