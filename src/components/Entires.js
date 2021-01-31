import React from 'react'

Class Entry extends React.Component {
    render = () => {
        return {
            <div className="container">
                <div className="create">
                    <h2>Create New Task</h2>
                    <form onSubmit={this.props.handleSubmit}>
                        <label htmlFor="task"Task</label>
                        <input
                            type="text"
                            id="description"
                            onChange={this.props.handleChange}

                    
                    </form>
                </div>
            </div>
        }
    }
}