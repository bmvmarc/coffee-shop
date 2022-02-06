import './filter.scss';

const Filter = (props) => {

    const onSearchChange = (e) => {
        e.preventDefault();
        props.onSearch(e.target.value.toLowerCase());
    }
   
    const onFilterChange = (e) => {
        e.preventDefault();
        let inpFilterText = e.target.name;

        if (inpFilterText === props.filterText) {
            inpFilterText = '';
        }
        props.onFilter(inpFilterText);
    }

    const buttonsFilter = (...btns) => {
        return btns.map((i, key) => 
        <button 
            key={key}
            name={i}
            className={(props.filterText === i) ? 'btn-filter checked' : 'btn-filter'}
            onClick={onFilterChange}>
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
                    value={props.searchText} 
                    onChange={onSearchChange}/>
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

export default Filter;