let palindrome = ()=> {
  let word = 'madam';
  console.log(`is ${word} a palindrome`);
  let wrdRev=word.split('').reverse().join('');
  if (word === wrdRev) {
	console.log(true);
  }
  else{
	console.log(false);
  };
}
palindrome();
