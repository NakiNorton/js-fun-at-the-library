function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: "Vassya",
    age: 16,
    pronouns: "she/her"
 }
}

function saveReview(review1, reviews) {
  if (reviews.indexOf(review1) === -1) {
    return reviews.push(`${review1}`)
  }
}

function calculatePageCount(bookTitle) {
  var bookPageCount = (`${bookTitle.length}`* 20);
  return bookPageCount;
}

function writeBook(bookTitle, bookCharacter) {
  return book = {
    title: `${bookTitle}`,
    mainCharacter: `${bookCharacter}`,
    pageCount: (`${bookTitle.length}`* 20),
    genre: "fantasy"
  }
}
// confused as there is no pageCount as a parameter


function editBook(ghoulBook) {
 ghoulBook.pageCount = (340 / 4) * 3;
 return ghoulBook.pageCount
}




module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
