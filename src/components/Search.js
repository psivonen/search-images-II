import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Search = ({ handleSubmit }) => {
    const [query, setQuery] = useState('');
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      handleSubmit(query);
    }
  
    return (
      <Form onSubmit={handleFormSubmit}>
        <FormControl type="text" placeholder="Search for images" className="mr-sm-2" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    );
  }

export default Search;
