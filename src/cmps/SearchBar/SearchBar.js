import React, { Component } from 'react';
import './SearchBar.scss';

import { inject } from 'mobx-react';

@inject('store')
class SearchBar extends Component {
	store = this.props.store;

	setFilter(ev) {
		this.store.filter = ev.target.value;
	}

	render() {
		return (
			<section className="search-bar">
				<input
					className="search-input"
					type="text"
					placeholder="Search"
					onChange={this.setFilter.bind(this)}
				/>
				<button className="search-btn">&#128269;</button>
			</section>
		);
	}
}

export default SearchBar;
