import React from 'react'

class SearchBox extends React.Component {
    state = {
        value: ""
    }
    handleChange = event => {
        this.setState({
            value: event.target.value
        }, () => this.props.onSearchBooks(this.state.value))
    }

    render() {
        return (
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchBox