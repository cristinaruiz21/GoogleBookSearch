import React from "react";
// import "./style.css";
import API from "../../utils/API";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  function bookSave(){
    API.saveBook({
        title: props.title,
        authors: props.authors,
        description: props.description,
        image:props.image,
        link:props.link,
    })
    .then(res=> console.log("Your book has been saved!"))
    .catch(err => console.log(err));
}
  return (
    <span className="save-btn btn btn-secondary" {...props} onClick={bookSave} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveBtn;
