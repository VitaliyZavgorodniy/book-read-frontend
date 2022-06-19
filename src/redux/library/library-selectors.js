const getIsFetching = (state) => state.library.isFetching;
const getLibrary = (state) => state.library.books;
const getPendingBooks = (state) => state.library.books.pending;
const getReadingBooks = (state) => state.library.books.reading;
const getCompletedBooks = (state) => state.library.books.completed;
const getTotalBooks = (state) => state.library.books.total;
const getFoundBooks = (state) => state.library.foundBooks;
const getStatusAddingBooks = (state) => state.library.isAddingBook;
const getStatusSearching = (state) => state.library.isSearching;

const librarySelectors = {
  getIsFetching,
  getLibrary,
  getPendingBooks,
  getReadingBooks,
  getCompletedBooks,
  getTotalBooks,
  getFoundBooks,
  getStatusAddingBooks,
  getStatusSearching,
};

export default librarySelectors;
