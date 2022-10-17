import { get } from 'axios';

/**
 * @function getVerse
 * fetches a random bible verse from bible.org's free api
 * @param none
 * @returns {JSON} object containing a random bible verse
 */
async function getVerse() {
  const verse = await get(
    "https://labs.bible.org/api/?passage=random&type=json"
  );
  return verse.data;
}

/**
 * @function getRandomInt
 * generates a integer between 0 and 10
 * @param none
 * @returns Integer
 */
function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

/**
 * @function createVerses
 * build and array of random bible verses
 * @param none
 * @returns array
 */
async function createVerses() {
  const arrayLength = getRandomInt();
  let verseArray = [];

  for (let index = 0; index < arrayLength; index++) {
    const verse = await getVerse();
    verseArray.push(verse[0].text);
  }

  return verseArray;
};


createVerses().then(data => console.log(data.join("\n")));