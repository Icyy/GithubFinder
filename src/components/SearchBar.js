import React, { Component } from 'react'

export class SearchBar extends Component {

    state = {text : ''};
    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.searchUser(this.state.text);
        this.setState({text : ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name = "text" value={this.state.text} onChange={this.onChange}/>
                    <button type="submit" className="btn btn-dark btn-block"> Search </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
