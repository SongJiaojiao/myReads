import React from 'react'

/* BookshelfChanger receives a value and return a value on change*/
class Bookshelfchanger extends React.Component {
    state = {
        shelf: this.props.shelf
    }
    handleChange = event => {
        this.setState({
            shelf: event.target.value
        }, () => this.props.onChangeshelf(this.state.shelf))
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Bookshelfchanger