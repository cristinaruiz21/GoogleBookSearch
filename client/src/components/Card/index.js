import React from "react";
// import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";

function Card(props){
    return(
        <div className="card">
            <div className="image">
                <img src={props.image} alt={props.name}>
                </img>
            </div>
            <div className="content">
                <h4>{props.title}</h4>
                <h5>{props.authors}</h5>
                <a rel="noreferrer noopener" target="_blank" href={props.link}></a>
                    {props.type ==="save" ?
                    (
                    <SaveBtn />
                    ):(
                    <DeleteBtn />
                    )}
            </div>
        </div>
    )
}

export default Card;
