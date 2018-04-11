import React from 'react';

import Form from './form';
import List from './list';
import Modal from './modal';

import './shoe-store.css';

export default class ShoeStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			search:'',
            list:[],
            modal: false,
            currentItem: ''
            }
		}
        
        handleClick(val) {
            this.setState({
                currentItem: val,
                modal: !this.state.modal
            })
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
                <div style={{'display':(this.state.modal)?'none':'block'}}>
				<List onClick={(e) => this.handleClick(e)} items={filteredShoes} />
                </div>
                <div className="modal" style={{'display':(this.state.modal)?'block':'none'}}>
                    <Modal currProd={this.state.currentItem} handle={(e)=>this.handleClick(e)}/>
                </div>
            </div>
        );
    }
}