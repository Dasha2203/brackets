module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(element => element.join(''));
  let i = 0;
  while(i<bracketsConfig.length) {
    if(str.includes(bracketsConfig[i])){
      str = str.replace(bracketsConfig[i], '');
      i=0;
      continue;
    }
    i++;
  }  
  if (str.length === 0){
      return true;
  }else{
      return false;
  }
}
