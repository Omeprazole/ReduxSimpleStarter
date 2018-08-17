import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY ='AIzaSyDGfvpN8KLVJYm7mel6RtSuzw7UC9s1CDE';

//Create a new compoment

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}




//put it on the page
ReactDom.render(<App />, document.querySelector('.container'));