import { Component } from "react";

import './filter.scss';

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            filterText: ''
        }
    }

    onSearchChange = (e) => {
        e.preventDefault();
        const searchText = e.target.value;
        this.setState({
            searchText
        })

        this.props.onSearch(searchText.toLowerCase());
    }
   
    onFilterChange = (e) => {
        e.preventDefault();

        let filterText = e.target.name;
        if (filterText === this.state.filterText) {
            filterText = '';
        }
        this.setState({
            filterText
        })
        
        this.props.onFilter(filterText);
    }

    render() {

        const buttonsFilter = (...btns) => {
            return btns.map((i, key) => 
            <button 
                key={key}
                name={i}
                className={(this.state.filterText === i) ? 'btn-filter checked' : 'btn-filter'}
                onClick={this.onFilterChange}>
                    {i}
            </button>);
        }

        return (
            <div className='filter'>
        
                <div className='filter-item search'>
                    <label htmlFor="search-box">Looking for</label>
                    <input 
                        name="search-box"
                        type='text' 
                        placeholder='start typing here...'
                        value={this.state.searchText} 
                        onChange={this.onSearchChange}
                    />
                </div>

                <div className='filter-item origin'>
                    
                    <label htmlFor="buttons">Or filter</label>

                    <div className= 'buttons' name="buttons">
                        {buttonsFilter('Brazil', 'Kenya', 'Columbia')}                    
                    </div>

                </div>                

            </div>
        );
    }

}