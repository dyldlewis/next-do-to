import React from "react";
import Task from './Task';
import PropTypes from "prop-types";


function TodoList(props) {

  if (props.masterTodoList.length > 0) {
    var hasTask = <h3>Your tasks</h3>
  }

  return (

    <div>
      {hasTask}
      {props.masterTodoList.map((task, index) =>
        <Task
          task={task}
          key={index}/>
      )}
    </div>
  )
}

TodoList.propTypes = {
  masterTodoList: PropTypes.array
}

export default TodoList
