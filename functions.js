const addToZero = numbers => {
    //let cycles = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        for(let x = i + 1; x < numbers.length; x++)
        {
            //console.log(cycles++, numbers[i], numbers[x]);
            if(numbers[i] + numbers[x] === 0)
            {
                return true;
            }
        }
    }
    return false;
}

//console.log(addToZero([]));
// -> False

//console.log(addToZero([1]));
// -> False

//console.log(addToZero([1, 2, 3]));
// -> False

//console.log(addToZero([1, 2, 3, -2]));
// -> True

//console.log(addToZero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, -17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));

//Time Complexity: O(n^2)
//Space Complexity: O(1)

const hasUniqueChars = word => [...new Set(word)].length === word.length;

//console.log(hasUniqueChars("Monday"));
// -> True

//console.log(hasUniqueChars("Moonday"));
// -> False

//Time Complexity: O(n)
//Space Complexity: O(1)

const isPangram = sentence => [...new Set(sentence.toLowerCase().replaceAll(/\W|\s/g, ''))].sort().join('') === 'abcdefghijklmnopqrstuvwxyz';

//console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

//console.log(isPangram("I like cats, but not mice"));
// -> False

//Time Complexity: O(n^4)
//Space Complexity: O(n)

const findLongestWord = words => words.sort((a, b) => b.length - a.length)[0].length;

//console.log(findLongestWord(["hi", "hello", "benevolent", "fudge", "gravity", "brain", "to", "painting", "earthquakes"]));

//Time Complexity: O(n)
//Space Complexity: O(n)