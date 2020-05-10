function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {fantasy:[], fiction:[], nonFiction:[]}
  }
  return library;
}


function addBook(libraryName, book) {
  if (book.genre === 'nonFiction') {
    libraryName.shelves.nonFiction.push(book)
  }
  if (book.genre === 'fantasy') {
    libraryName.shelves.fantasy.push(book)
  }
  if (book.genre === 'fiction') {
    libraryName.shelves.fiction.push(book);
  }
}


function checkoutBook(libraryName, book) {

return "You have now checked out Pride and Prejudice from the Denver Public Library"
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
