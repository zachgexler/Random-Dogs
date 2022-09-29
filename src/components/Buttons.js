import React from "react";

const Buttons = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.dogSearch();
  };
  return (
    <div className="button" onSubmit={handleSubmit}>
      <h1>Welcome to a Better Day!</h1>
      <h2>Click the button for a smile.</h2>
      <form>
        <button type="submit">See Dogs</button>
      </form>
    </div>
  );
};

export default Buttons;
