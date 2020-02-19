function div() {
  for(let y=1;y>0 && y<1000;y++) {
	if(y%3==0){
	  console.log('fiz');
	}
	if(y%5==0){
	  console.log('buzz');
	}
	if(y%3==0 && y%5==0){
	  console.log('fizbuzz');
	}
  }
}
div();
