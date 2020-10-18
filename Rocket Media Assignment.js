
//defining readline interface
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


//reading number of socks
var number = 0;
readline.question('enter numbers  of socks?', num => {
  console.log(`you have entered ${num}!`);
  readArray(num);
});


//reading socks values
function readArray(num)
{

	readline.question('enter socks?', arr => {
  		console.log(`you have entered ${arr}!`);
  		calculatePairs(num, arr.split(' '));
  		readline.close();
  });
}

//calculate all the pairs
function calculatePairs(number, input)
{
	if(input.length != number){
		console.log("ERROR!! you have not entered correct number of socks.......Try Again!!!");
		return;
	}

	//map for counting socks of same color
	var map = new Map();

	//this saves the actual count of pairs
	var result = 0;

	//counting socks of same color
	for (let i = 0; i < input.length; i++){
		
		
		if(map.has(input[i])){
			map.set(input[i], map.get(input[i])+1);
		}
		else
			map.set(input[i] , 1);
	}

	//counting pairs of socks
	for (let key of map.keys()){
		result+=Math.floor(map.get(key)/2);

	}

	//printing results
	console.log("result = " + result);
}


