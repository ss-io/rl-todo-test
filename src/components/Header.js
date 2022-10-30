import React from "react";
import './Header.scss';

const Header = () => {
  return (
    <div className="page-header-wrapper">
      <div className="page-header">
        <h1>Your task</h1>
        <p>
          You have been asked to develop a to-do list application that allows the user to create and manage tasks. The application has the following features:
        </p>
        <ul>
          <li>Add and view tasks</li>
          <li>Delete a task</li>
          <li>Complete a task</li>
          <li>Set a priority for my tasks</li>
          <li>View the tasks sorted by priority and name</li>
          <li>View the number of total and completed tasks</li>
        </ul>
        <div className="divider"></div>
      </div>
    </div>
  )
}

export default Header;

