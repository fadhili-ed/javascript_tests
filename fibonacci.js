export default function fibonacci(n) {
  let array = [1];
  if (n==1){
	
	return [1];
	}else{ 
	array=[1,1];
	for(let i=2;i<n;i++) {
	  
	  array.push(array[array.length-1] + array[array.length-2]); 
	  
	}

  return array;
}
} 
