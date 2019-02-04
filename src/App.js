import React, { Component } from 'react';
import './App.scss';

import SearchBar from './cmps/SearchBar/SearchBar';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends Component {
  store = this.props.store;
  render() {
    return (
      <div className="app">
          <h1 className="main-title">Todos App</h1>
          <SearchBar/>
      </div>
    );
  }
}

export default App;
