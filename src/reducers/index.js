/*/// This is where the "Application/Global State" is set using the reducer functions in reducers 
eg. books and ActiveBook will become keys on our global state
///*/

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
//import new reducer
import ActiveBook from './reducer_active_book';


//This function is getting the reducers and combining them into one "root reducer"
const rootReducer = combineReducers({
  books: BooksReducer,
  //return it as a new piece of state
  activeBook: ActiveBook
});

export default rootReducer;
