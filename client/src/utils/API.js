// Placeholder for any additional helper functions

// Example: Check if a book is already saved by the user
export const isBookSaved = (bookId, savedBooks) => {
    return savedBooks.some((book) => book.bookId === bookId);
  };