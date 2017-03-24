import React, { Component } from 'react';
import { Button, InputCard } from '@btag/bt-ui-library/';
import './Index.css';
import List from './List'


class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [{
        task: "hello",
        done: false
      }],
      input: "",
      showOption: 'All'
    }
  }
  updateInput(e) {
    this.setState({
      input: e.target.value
    })
  }
  _addItem() {
    const lists = this.state.lists
    this.setState({
      lists: lists.concat( {task: this.state.input, done: false} )
    })

  }
  toggleList(i) {
    const listsLeft = this.state.lists.slice(0,i)
    const listsRight = this.state.lists.slice(i+1)
    const listClicked = this.state.lists[i]
    // console.log(listClicked)
    if (listClicked.done) {
      listClicked.done = false
    } else {
      listClicked.done = true
    }
    // console.log(listClicked)
    this.setState({
      lists: [...listsLeft, listClicked, ...listsRight]
    })
  }
  filterDoneTasks() {
    this.setState({
      showOption: 'Done'
    })
  }
  filterNotDoneTasks() {
    this.setState({
      showOption: 'Not Done'
    })
  }
  ShowAll() {
    this.setState({
      showOption: 'All'
    })
  }
  render() {
    const allLists = this.state.lists;
    let filteredList
    if (this.state.showOption === 'All') {
      filteredList = allLists
    } else if (this.state.showOption === 'Done') {
      filteredList = allLists.filter( list => list.done === true)
    } else if (this.state.showOption === 'Not Done'){
      filteredList = allLists.filter( list => list.done === false)
    }

    return (
      <div className="row hcenter" >
        <div className="desktop-1-of-2">
            <InputCard size="large" placeholder="add task here..." onChange={ this.updateInput.bind(this)}>
                <Button type="solid" onClick={() => this._addItem()}>SUBMIT</Button>
            </InputCard>
          <List lists={filteredList} onClick={ i => this.toggleList(i)} />
          <div className="row" style={{
            marginBottom: '24px',
            textAlign: 'center',
        }}>
            <div className="desktop-1-of-3">
                <Button onClick={() => this.filterDoneTasks()}  type="solid">Done</Button>
            </div>
            <div className="desktop-1-of-3">
                <Button onClick={() => this.filterNotDoneTasks()} type="solid">Not Done</Button>
            </div>
            <div className="desktop-1-of-3">
                <Button onClick={() => this.ShowAll()} type="solid">All</Button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
