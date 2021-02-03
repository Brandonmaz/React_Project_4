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
            <div className="containerPost">
              <h1>Create Entry</h1>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="task"></label>
                  <input
                    placeholder="Task"
                    type="text"
                    id="task"
                    onChange={this.handleChange}
                    value={this.state.task}
                  />
                  <br/>
                  <label htmlFor="description"></label>
                  <input
                    placeholder="Description"
                    type="text"
                    id="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                  />
                  <br/>
                  <h5>Due Date</h5>
                  <label htmlFor="due_date"></label>
                  <input
                    type="date"
                    id="due_date"
                    onChange={this.handleChange}
                    value={this.state.due_date}
                  />
                  <br/>
                  <input type="submit" id="entryButton" value="Create Entry"/>
                </form>
            </div>
            <div id="paper">
              <h2>Tasks to Complete</h2>
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
            <footer>

                <ul className="column-1">
                    <h3>Developers</h3>
                    <li><a href='https://www.linkedin.com/in/aaronwilson166/'>Aaron Wilson</a></li>
                    <li><a href='https://www.linkedin.com/in/brandonmazikowski/'>Brandon Mazikowski</a></li>
                    <li><a href='https://www.linkedin.com/in/cavellw/'>Cavell Wong</a></li>
                    <li><a href='https://www.linkedin.com/in/jamestorres01/'>James Torres</a></li>
                </ul>
                <ul className="column-2">
                    <h3>Site Info</h3>
                    <li><a href='https://github.com/cavellerson/React_Project_4'>Github</a></li>
                    <li><a href='https://todolistabcj.herokuapp.com/'>API</a></li>
                </ul>

            </footer>
          </>

        )
      }
    }

export default App
