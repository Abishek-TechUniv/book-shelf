import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getLikes, saveBooks } from '../../redux/actions/books';

import './Content.css';


class Content extends React.Component {
  componentDidMount() {
    axios.post('/books');
  }

  merge = () => {
    const bookShelf = [];
    for (let i = 0; i < this.props.booksArr.length; i += 1) {
      bookShelf[i] = Object.assign(
        this.props.booksArr[i],
        this.props.likesArr[i],
      );
    }
    return bookShelf;
  }

  bookShelf = () => {
    this.merge().forEach(item => console.log(item));
  }

  render() {
    if (this.props.booksArr.length === 0) {
      return (
        <div className="Content-container"> No books found <button onClick={this.props.getBooks}>Get</button></div>
      );
    }
    return (<div className="Content-container"><button onClick={() => this.bookShelf()}>check</button></div>);
  }
}

const mapStateToProps = state => ({
  booksArr: state.books.booksArr,
  likesArr: state.books.likesArr,
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => {
    axios.get('/books/liked').then((result) => {
      dispatch(saveBooks(result.data));
    });
    axios.get('/likes').then((result) => {
      dispatch(getLikes(result.data));
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);
