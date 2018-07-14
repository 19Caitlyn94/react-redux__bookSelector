/*/// This is the action creator function and is triggered when someone clicks on a book ///*/ 

export function selectBook(book) {
    return {
        //returning the action, the type is usually in CAPITALS 
        type: 'BOOK_SELECTED',
        payload: book
    }
    // can use console.log( "A book has been selected", book.title) to test inside this function
}
