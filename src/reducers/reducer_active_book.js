//state parameter id not application state it the state this user is responsible for
//default state to null in case it is undefined
export default function(state = null, action) {
    //if its the specific action we are calling return new payload
    switch(action.type) {
        case 'BOOK_SELECTED':
            //dont do something like state:title = book.title (always want to return a fresh object)
            return action.payload;
    }
    //pass the state through
    return state;
}