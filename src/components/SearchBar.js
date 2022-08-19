import React, {useState} from 'react';
import '../style/components/SearchBar.css';

function SearchBar({setSearch}) {

    const [word, setWord] = useState("")

    const onChangeSearch = (e) => {
        setWord(e.target.value);
    }
    const onClickSearch= () => {
        setSearch(word)
    }
    return (
        <div className='searchBox'>
            <input id='inputBar'type="text" value={word} onChange={onChangeSearch} />
            <img src={`${process.env.PUBLIC_URL}/img/searchGlass.png`} alt='검색돋보기' onClick={onClickSearch}/>
        </div>
    );
}

export default SearchBar;