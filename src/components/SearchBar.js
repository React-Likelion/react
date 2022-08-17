import React, { useState } from 'react';
import '../style/components/SearchBar.css';

function SearchBar() {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='searchBox'>
            <input id='inputBar'type="text" value={search} onChange={onChangeSearch} />
            <img src='/img/searchGlass.png' alt='검색돋보기' />
        </div>
    );
}

export default SearchBar;