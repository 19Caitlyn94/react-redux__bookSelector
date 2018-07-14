import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';



class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">{book.title} </li>
            )
        });
    }
    
    render() {
        return (
            <ul className="col-md-6 list-group">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
    books: state.books
    };
}
//Anything returned from this function will end up as props onthe booklist container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote booklist to a new container, it needs to know about this
// new "selectBook" dispatch method. Make it available as a prop.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);


