import React from 'react';

import Form from './form';
import List from './list';

import './shoe-store.css';

export default class ShoeStore extends React.Component {
    constructor(props) {
        super();
        this.state = {
			search:'',
            list:[]
            }
		}
		
		search(term) {
			this.setState({
				search:term
			});
		}

    render() {
			const filteredShoes = this.props.shoes.filter(shoe => shoe.name.toLowerCase().includes(this.state.search));
        return (
            <div className="ShoeStore">
                <div className="header"><h1>Feature Footwear</h1></div>
				<Form submit={(e) => this.search(e)}/>
				<List items={filteredShoes} />
            </div>
        );
    }
}