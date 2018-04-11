import React from 'react';

import './form.css';

export default function Form(props) {
    return (
				<form className="searchForm" 
					onSubmit={(e) => {
					e.preventDefault();
					let inputVal = e.target.shoeSearch.value;
					props.submit(inputVal);
				}
					}>
					<input type="text" name="shoeSearch" className="searchInput"></input>
					<button className="searchBtn">Submit</button>
        </form>
    );
}