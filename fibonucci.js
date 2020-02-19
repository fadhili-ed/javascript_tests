let n=0, y=1;
console.log(n);
console.log(y);
z=n+y;
console.log(z);
x=y+z;
console.log(x);
a=z+x;
console.log(a);
t=a+x;
console.log(t);
c=a+t;
console.log(c);

console.log('function start====');

function fibonucci() {
  let array = [0,1]
  for(let n=1;n<12;n++){
	array.push(array[n] + array[n-1])
	console.log(array);
	};
} 
fibonucci();
	
  







	
