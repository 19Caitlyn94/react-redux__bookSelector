// This container uses an action to return details of the book selected
import React, { Component } from 'react';
import { connect } from 'react-redux';

// dont forget to remove "export default" when exported at the bottom
class BookDetail extends Component {
    render() {
        //"this.props.book" is returning null (set in reducer) and cant get title of null so add a check
        if(!this.props.book){ 
            return <div>Select a book</div>}
        return (
          <div>
              <h3>Details for:</h3>
            <p>{this.props.book.title}</p>
            <p>Pages: {this.props.book.pages}</p>
          </div>
        )
      }
    }

//the argument/parameter here is the "application state"
function mapStateToProps(state) {
    //return a prop "book"
    return {
        //activeBook is from the root reducer in "index.js"
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);