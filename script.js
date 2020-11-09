/**
 * @function getVerse
 * fetches a random bible verse from bible.org's free api
 * @param none
 * @returns {JSON} object containing a random bible verse
 */
async function getVerse(){
   const verse = await fetch('https://labs.bible.org/api/?passage=random&type=json');
   return verse.json();
}

/**
 * @function getRandomInt
 * generates a integer between 0 and 10
 * @param none
 * @returns Integer
 */
function getRandomInt(){
    return Math.floor(Math.random() * 10);
}

