//Initial blank array to eventually contain fruit //

let fruits = [
];

//Function to capitalise first letter for formatting//
function CapFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

//Function to display current fruits in html//

function CurrentFruits(list) {
    for (const word of list) {
        document.getElementById('input_list_contents').insertAdjacentHTML('beforeend', `<p>${CapFirst(word)}</p>`);
    }

}
    
//Function to add fruit to array submit button and show in list on right//
//Only allows up to 8 fruit//
function AddFruit() {
    let fruitInput = document.getElementById('input_fruit').value;


    //Check to ensure all characters are letters - trick I found on stack overflow that will only return true if letter inputted!//
    let charCheck = true

    for (const char of fruitInput) {
        if(char.toUpperCase() != char.toLowerCase() ) {
        } else {
            charCheck = false
        }
    }
    
    if (!charCheck) {
        alert('This is not a valid word');
    } else if (fruits.length < 8) {
        fruits.push(fruitInput);
        document.getElementById('input_list_contents').innerHTML = "";
        CurrentFruits(fruits);
    } else {
        alert('Cannot add anymore fruits!')
    }
}

//Function to clear fruit list by re-initialising blank list, also updates displayed list to blank//
function ClearFruit() {
    fruits = [];
    document.getElementById('input_list_contents').innerHTML = "";
}


//Function to calculate vowels and consonants (almost the same as fruityloops.jss script)//

function FruityLoops(list) {

    //First making output blank//
    document.getElementById('output_contents').innerHTML = "";

    for (const word of list) {
        //Vowel and consonant numbers initialised as 0//
        let vowels = 0;
        let cons = 0;
        
        //Loop that goes through every letter in each word in fruit list//

        for (const letter of word) {
            //First make everything lowercase//
            letterCase = letter.toLowerCase();

            //Check for vowel, if not consonant counter increases//
            if (letterCase == 'a' || letterCase == 'e' || letterCase == 'i' || letterCase == 'o' || letterCase == 'u') {
                vowels += 1;
            } else {
                cons += 1;
            }
        }

        //Checks to see if number of vowels is 1 - if anything but 1, will return an 's' to be put into the template literal//
        let pluralCheckVowel
        if (vowels == 1) {
            pluralCheckVowel = ''
        } else {
            pluralCheckVowel = 's'
        }

        //Same as above but for consonants//
        let pluralCheckCons
        if (cons == 1) {
            pluralCheckCons = ''
        } else {
            pluralCheckCons = 's'
        }


        //Returns output in output div rather than console//
        document.getElementById('output_contents').innerHTML += `<p>${CapFirst(word)} has ${vowels} vowel${pluralCheckVowel} and ${cons} consonant${pluralCheckCons}</p>`;

    }

}
