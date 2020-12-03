import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";


function Books(props) {
  const [books, setBook] = useState({})

  useEffect(() => {
    API.getBooks()
      .then(res => setBook(res.data))
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
                    <Card key={book._id} type="delete"
                    id={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
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
