// This container uses an action to return details of the book selected
import React, { Component } from 'react';
import { connect } from 'react-redux';

// dont forget to remove "export default" when exported at the bottom
class BookDetail extends Component {
    render() {
        return (
          <div>
            Book title
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