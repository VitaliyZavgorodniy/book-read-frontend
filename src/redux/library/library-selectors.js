const getIsFetching = (state) => state.library.isFetching;
const getLibrary = (state) => state.library.books;
const getPendingBooks = (state) => state.library.books.pending;
const getReadingBooks = (state) => state.library.books.reading;
const getCompletedBooks = (state) => state.library.books.completed;
const getTotalBooks = (state) => state.library.books.total;
const getFoundBooks = (state) => state.library.foundBooks;

const librarySelectors = {
  getIsFetching,
  getLibrary,
  getPendingBooks,
  getReadingBooks,
  getCompletedBooks,
  getTotalBooks,
  getFoundBooks,
};

export default librarySelectors;
