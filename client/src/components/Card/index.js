import React from "react";
// import "./style.css";
import {Button} from "../Button";
import API from "../../utils/API";


function Card(props) {
  function bookSave() {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image:props.image,
      link:props.link,
  
    })
      .then(res => console.log("Your book has been saved!"))
      .catch(err => console.log(err));
  
  }

  function bookDelete() {
    API.deleteBook(props.id)
      .then(res => console.log("Your book has been deleted"))
      .catch(err => console.log(err));
  
  }

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
       <div className="content">
        
      
          
            <a rel="noreferrer noopener" target="_blank" href={props.link}>
              
              <button className="btn btn-secondary" style={{margingRight: 10}}>Info</button>

            
            </a>

        {props.type ==="save" ?
        (
          <Button className ="btn btn-secondary" onClick={bookSave}>Save</Button>
        ):(
          <Button className ="btn btn-secondary" onClick={bookDelete}>Delete</Button>

        )}
      
      </div>
      
    </div>
  );
}

export default Card;