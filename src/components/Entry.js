import React, {Component} from 'react'

class Entry extends Component {
    render = () => {
        return (
            <div className="container">
                {/* <div className="create">
                    <h2>Create New Task</h2>
                    <form onSubmit={this.props.handleSubmit}>
                        <label htmlFor="task">Task</label>
                        <input
                            type="text"
                            id="task"
                            onChange={this.props.handleChange}
                            value={this.props.state.task}
                        />
                        <br />
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            onChange={this.props.handleChange}
                            value={this.props.state.description}
                        />
                        <br />
                        <br />
                        <label htmlFor="duedate">Due Date</label>
                        <input
                            type="text"
                            id="duedate"
                            onChange={this.props.handleChange}
                            value={this.props.state.due_date}
                        />
                        <br />
                        <input type="submit" value="Add New Task"/>
                    </form>
                </div> */}

                <div className="task">
                    <h4>Task: {this.props.entry.task}</h4>
                    <h4>Description: {this.props.entry.description}</h4>
                    <h4>Due Date: {this.props.entry.due_date}</h4>
                    {/* <input type="checkbox" {this.props.entry.done}/> */}
                    <button value={this.props.entry.id} onClick={this.props.deleteEntry}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Entry