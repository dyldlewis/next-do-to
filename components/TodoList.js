import React from "react";
import Task from './Task';
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <div>
      <h3>Your tasks</h3>
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
