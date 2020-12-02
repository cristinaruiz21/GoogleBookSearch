import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";


function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    API.googleBooks()
    .then(res =>{
      // console.log(res.data)
      setBooks(res.data)
    })
    .catch(err => console.log(err));
  }, [])


    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
          <h1>Saved Books</h1>
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


export default Books;
