import React, { Component } from 'react'

export class SearchBar extends Component {

    state = {text : ''};
    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.searchUser(this.state.text);
        //this.setState({text : ''}); use this to clear the text on search bar after you search
    }

    clearState = (e)=>{
        e.preventDefault();
        this.props.clearusers();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name = "text" value={this.state.text} onChange={this.onChange}/>
                    <button type="submit" className="btn btn-dark btn-block"> Search </button>
                </form>
                {this.props.showBtn && <button  className="btn btn-light btn-block" onClick={this.clearState} > Clear </button>}
            </div>
        )
    }
}

export default SearchBar;
