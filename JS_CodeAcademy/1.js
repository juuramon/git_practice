//////CHALLENGES
//////Solution1
/*
function addUp(num) {
	return num * (num + 1) / 2
}
console.log(addUp(6));
*/
//////////////////////////////////////
///////Solution2
/*
function addUp(num) {
    let numbers = [];
    let sum = 0;

	for ( i  = 0 ;  i < num; ) {
        numbers.push(num);
        num -= 1;
    }
    
    for ( x of numbers) {
        sum += x;
    }
    // console.log(numbers);
    return sum;
}
*/


/////////////Encoding string based on whether the letter occurs more than once
/*
const duplicateEncode = (word) => {
    let encodedString = "";
    for ( let i = 0; i < word.length; i++ ) {
        let a = word.charAt(i);
        if ( word.indexOf(a,word) === word.lastIndexOf(a,word) ) {
            encodedString += "(";
        } else encodedString += ")";
    }
    return encodedString;
  }
  console.log(duplicateEncode('janka')
  )
*/