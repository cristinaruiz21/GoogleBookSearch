import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState({})

  function handleInputChange(event){
    const {name, value} = event.target;
    setSearch({...search, [name]: value})
  }

  // Loads all books and sets them to books
  function handleFormSubmit(event) {
    event.preventDefault();
    if(search.title){
      API.googleBooks(search.title)
      .then(res =>{
        setBooks(res.data.items || [])
        console.log(books)
      })
      .catch(err => console.log(err));
    }
  };


    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(search.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col size="md-6 sm-12">
            <h1>Search Results</h1>
            {books.length ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {books.map(book => (
                    <Card key={book.id} type="save"
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks?.thumbnail}
                    link={book.volumeInfo.canonicalVolumeLink}
                    >
                    </Card>
                  ))}
                  </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }


export default Search;
