/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
    let n,k = 0;
    for(let i=0; i < preferences.length; i++)
    {
      k=0;
      n=i;
        while(k!==3)
        {
          if(n >= preferences.length) break;
          if(n+1 === preferences[n]) break;
          n = preferences[n]-1;
          k++;
        }
        if((k===3) && (i===n))
        {
          count++;
        }
    }
  return count/3;
};
