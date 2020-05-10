function shelfBook(book, scifiShelf) {
  if(scifiShelf.length < 3) {
    return scifiShelf.unshift(book);
  }
}


function unshelfBook(book, scifiShelf) {
  var bookIndex;
  for (i = 0; i < scifiShelf.length; i++) {
    if (scifiShelf[i].title === book)
    bookIndex = i;
  }
  scifiShelf.splice(bookIndex, 1);
}


function listTitles(fantasyShelf) {
  var titlesArray = [];
  for (i = 0; i < fantasyShelf.length; i++) {
    titlesArray.push(fantasyShelf[i].title);
    var titles = titlesArray.join(', ');
}
return titles;
}


function searchShelf(scifiShelf, book) {
  for (var i = 0; i < scifiShelf.length; i++) {
      if (scifiShelf[i].title === book) {
        return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
