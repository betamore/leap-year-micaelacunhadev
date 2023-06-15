//The tricky thing here is that a leap year in the Gregorian calendar occurs:
//on every year that is evenly divisible by 4 except every year that is evenly divisible by 100 unless the year is also evenly divisible by 400

//For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.
function isLeapYear(year){

	if ( year%4 !== 0 ){
		return false
	}
	else{
		if ( year%100 === 0 && year%400 === 0)
			return true
	}
	return false
}



// DONT CHANGE. THIS IS FOR TESTING
let years = [ 2015, 1970, 1996, 1960, 2100, 1900, 2000, 2400, 1800]

for (let year of years) {
	console.log(isLeapYear(year))
}
