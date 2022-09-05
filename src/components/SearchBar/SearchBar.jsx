import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)

    }

    return (
        <Container>
            <Form onSubmit={submitHandler} className="d-flex m-5">
                <Form.Control
                type="search"
                placeholder="More Recipes"
                className="me-1"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="outline-success" onClick={submitHandler}>Search</Button>
            </Form>
        </Container>
    )
}

export default SearchBar