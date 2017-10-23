import React from "react";
import PropTypes from "prop-types";


function Task(props) {
  return (
    <div>
      <h1>{props.task.name}</h1>
      <h4>{props.task.description}</h4>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object
}


export default Task;
