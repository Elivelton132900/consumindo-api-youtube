import React from "react";
import './searchbar.css'

class SearchBar extends React.Component {

    state = {term: ''}

    onTyping = (e) => {
        this.setState({term: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearch(this.state.term)
    }

    render() {
        return (
            <div className="searchbar">
                <form className="searchBarContainerWrap"
                onSubmit={this.onFormSubmit}
                >
                    <label className="labelSearch" for="inputSearch">Procure por um vídeo</label>
                    <input 
                    id="inputSearch" 
                    type="text" 
                    className="inputSearch"
                    value={this.state.term}
                    onChange={this.onTyping}
                    />
                </form>
            </div>
        )
    }


}

export default SearchBar