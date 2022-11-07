function findAuthorById(authors, id) {
  let authorObject = authors.find(author => author.id == id)
  return authorObject;
}

function findBookById(books, id) {
  let bookObject = books.find(book => book.id == id)
  return bookObject;
}


function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter ((book) => !book.borrows[0].returned);
  return [unreturned, returned];
}


function getBorrowersForBook(book, accounts) {

    const { borrows } = book;
  
    const renters = borrows.map(({ id, returned })=> {
      
      const account = accounts.find(account => account.id === id);
      
      return {
        ...account,
        returned,
      };
    });

    return renters

      .sort((borrowA, borrowB) => {
        const companyA = borrowA.company;
        const companyB = borrowB.company;
        return companyA.localeCompare(companyB);
      })

      .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
