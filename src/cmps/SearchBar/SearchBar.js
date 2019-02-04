import React , { Component } from 'react';
import { observer } from 'mobx';

import { inject } from 'mobx-react';


@inject('store')
class SearchBar extends Component {

    store = this.props.store;

    setFilter(ev) {
        this.store.filter = ev.target.value;
    }

    render() {
        return (
            <input className="search-input" type="text" placeholder="Search" onChange={this.setFilter.bind(this)} />
        );
    }
}

export default SearchBar;