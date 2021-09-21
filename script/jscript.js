//                    ARRAY PRACTICE

//Element of array * index
function element_times_index(numbers) {
    i = 0;
    holder = [];

    while(i < numbers.length){
        holder[i] = numbers[i] *= i;
        i += 1;
    }

    console.log(holder)
}

/* print output

console.log("1");
element_times_index([4,7,6,5]);
console.log("2");
element_times_index([1,1,1,1,1,1]);

*/

//      END

function arrayDoubler(numbers) {
    //increment
    i = 0;

    //while we havent gone through each part kep going
    while(i < numbers.length) {

        //make the number within the array were at itself *2
        numbers[i] = numbers[i] *= 2;

        //go to the next position in the array
        i += 1;

    }

    //output result
    console.log(numbers);

}

/* Output

arrayDoubler([1,10,30,120,12,5]);

*/

function evenNumbers(max) {
    //increment
    i = 0;
    evenNums = [];
    while(i <= max){
        //if we havent reached higher than or equal to max then add to new array
        evenNums.push(i);

        //add 2 to the counter since were counting in multiples of 2
        i += 2;
    }

    //print evenNums
    console.log(evenNums);

}

/* output
evenNumbers(10);
evenNumbers(5);
*/

function range(min, max) {
    //set i to min because this is where we will count from. so increment sets from here
    i = min;

    //place to store the list
    numList = [];

    //repeat while the current increment is less than or = to max
    while(i <= max) {
        //append the number "i" to numlist once its met requirements of being less than or equal to max
        numList.push(i);

        //count to next #
        i += 1;
    }

    //print output
    console.log(numList);
}

/* Results
range(2,7);
range(13,20);
*/
