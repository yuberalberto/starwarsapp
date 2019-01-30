import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import './App.css';
import {setSearchField, requestPeople} from '../actions.js'
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';


const mapStateToProps = state => {
  return {
    searchField: state.searchPeople.searchField,
    people: state.requestPeople.people,
    isPending: state.requestPeople.isPending,
    error: state.requestPeople.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPeople: () => dispatch(requestPeople()),
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestPeople()
  }

  render() {
    const {searchField, onSearchChange, people, isPending} = this.props;
    const filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return isPending ?
    <h1>Loading...</h1>:(
      <div className="App">
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList people= {filteredPeople}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
