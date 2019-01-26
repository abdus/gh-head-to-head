import React from 'react';
  
class SearchBar extends React.Component {
    render() {
        return(
            <>
                <form onSubmit={this.props.handleFormSubmit} className='enter-gh-username'>
                    <h3>Enter GH Username</h3>
                    <p className="gray-text">You are allowed enter multiple usernames separated by comma</p>
                    <input
                        onChange={this.props.handleInputChange}
                        type="search"
                        placeholder="Enter GitHub Username Separate by Comma"
                    />
                    <input type="submit" value="GO"/>
                </form>
            </>
        )
    }
}


export default SearchBar;