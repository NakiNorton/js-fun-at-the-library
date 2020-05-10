function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
 }
 return character;
}


function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    return reviews.push(review);
  }
}


function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}


function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
    return book;
}

function editBook(book) {
 book.pageCount = book.pageCount * .75;
 return book.pageCount
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
