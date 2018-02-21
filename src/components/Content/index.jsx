import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getLikes, saveBooks } from '../../redux/actions/books';
import Shelf from '../Shelf';
import './Content.css';


class Content extends React.Component {
  componentDidMount() {
    axios.post('/books');
  }


  bookShelf = () => {
    const bookShelf = [];
    for (let i = 0; i < this.props.booksArr.length; i += 1) {
      bookShelf[i] = Object.assign(
        this.props.booksArr[i],
        this.props.likesArr[i],
      );
    }
    const group = {};
    bookShelf.forEach((elem) => {
      if (group[elem.author] === undefined) { group[elem.author] = [elem]; }
      group[elem.author].push(elem);
    });
    return Object.keys(group).map(author => <Shelf text={author} data={group[author]} />);
  }

  render() {
    if (this.props.booksArr.length === 0) {
      return (
        <div className="Content-container"> No books found <button onClick={this.props.getBooks}>Get</button></div>
      );
    }
    return (<div className="Content-container">{this.bookShelf()}</div>);
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
