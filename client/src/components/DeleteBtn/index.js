import React from "react";
import API from "../../utils/API";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  function bookDelete(){
    API.deleteBook(props.id)
    .then(res=> console.log("Your book has been deleted"))
    .catch(err => console.log(err));
}
  return (
    <span className="delete-btn btn btn-secondary" {...props} onClick={bookDelete} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteBtn;