import React, { Component } from 'react'
import Entry from './components/Entry'
import FinishedEntry from './components/finishedEntries'

import axios from 'axios'
class App extends React.Component {
  state = {
    task: '',
    description: '',
    due_date: '',
    done: false,
    entries: []
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://todolistabcj.herokuapp.com/entries', this.state).then((response) => {
      this.getEntries()
    })
  }
  deleteEntry = (event) => {
    axios.delete('https://todolistabcj.herokuapp.com/entries/' + event.target.value).then((response) => {
      this.getEntries()
    })
  }
  updateEntry = (event) => {
    event.preventDefault()
    event.target.reset()
    const id = event.target.id
    axios.put('https://todolistabcj.herokuapp.com/entries/' + id, this.state).then((response) => {
      this.getEntries()
    })
  }

  updateDone = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios.put('https://todolistacj.herokuapp.com/entries/done/' + id, this.state).then((response) => {
        this.getEntries()
    })
  }

  getEntries = () => {
    axios.get('https://todolistabcj.herokuapp.com/entries')
    .then(
        (response) => this.setState({ entries: response.data, task: '', description: '', due_date: ''}),
        (err) => console.error(err)
    )
    .catch((error) => console.error(error))
    }

    componentDidMount = () => {
        this.getEntries();
    }

    render = () => {
        return (
            <>
            <h1>Create New Entry</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="task">Task</label>
              <input
                type="text"
                id="task"
                onChange={this.handleChange}
                value={this.state.task}
              />
              <br/>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <br/>
              <label htmlFor="due_date">Due Date</label>
              <input
                type="date"
                id="due_date"
                onChange={this.handleChange}
                value={this.state.due_date}
              />
              <br/>
              <input type="submit" value="Create Entry"/>
            </form>
            
            <div id="paper">
              <h2>Task</h2>
              <div id="pattern">
                <div id="content">
                  {this.state.entries.map((entry) => {
                      return (
                        <Entry
                            key={entry.id}
                            entry={entry}
                            deleteEntry={this.deleteEntry}
                            updateEntry={this.updateEntry}
                            handleChange={this.handleChange}
                            updateDone={this.updateDone}
                        />
                      )
                  })}
                </div>
              </div>
            </div>
          </>
        )
      }
    }

export default App
