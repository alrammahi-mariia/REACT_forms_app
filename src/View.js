import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <h2>This is your input:</h2>
      <div className="notepad">
        <p>
          First name: <span>{props.firstname}</span>
        </p>
      </div>

      <div className="notepad">
        <p>
          Last name: <span>{props.lastname}</span>
        </p>
      </div>

      <div className="notepad">
        <p>
          Phone number: <span>{props.phone}</span>
        </p>
      </div>

      <div className="notepad">
        <p>
          Role: <span>{props.role}</span>
        </p>
      </div>

      <div className="notepad">
        <p>
          Message: <span>{props.message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
