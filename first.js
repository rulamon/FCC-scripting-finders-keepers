function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++){
    if(func(arr[i])){
    	return arr[i]
    }
  }
  return undefined;
}

console.log(findElement([1, 900, 3, 5, 9], num => num % 2 === 0));