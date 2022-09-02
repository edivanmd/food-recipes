import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {

    const [text, setInput] = useState([]);

    return (
        <Container sticky="top">
            <Form className="d-flex mt-4">
                <Form.Control
                type="search"
                placeholder="More Recipes"
                className="me-1"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Container>
    )
}

export default SearchBar