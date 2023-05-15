import React, { useState } from 'react';
import { Container, Form, FormControl, Row, Col, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { ACCESS_KEY } from '../config';

import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

// Custom MUI button
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[300],
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: grey[500],
    color: theme.palette.getContrastText(grey[800]),
    boxShadow: 'none',
  },
}));

const SearchImages = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query, per_page: 21 },
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` }, // Get your own access key, when registering into unsplash.com
      });
      console.log('Search successful')
      console.log(response.data.results)
      setImages(response.data.results);
    } catch (error) {
        console.error(error);
    }
  };

  // Display the fetched images in a grid
  const imageList = images.map((image) => (
    <Col key={image.id} md={4} className="pb-4 img-column">
      <div className='wrapper'>
        <img src={image.urls.regular} alt={image.alt_description} className="img-fluid" style={{ height: '100%', width: '100%' }}/>
          <p className='img-text'>Photo by <a href={'https://unsplash.com/@' + image.user.username + '/?utm_source=Search_images&utm_medium=referral'} target='_blank' rel='noopener noreferrer' className='link'>
          {image.user.username}</a> on <a href="https://unsplash.com/?utm_source=Search_images&utm_medium=referral">Unsplash</a>
          </p>
      </div>
    </Col>
  ));

  return (
    <Container className='d-flex justify-content-center align-items-center flex-column'>
        <h1>Search images</h1>
          <Form onSubmit={handleSearchSubmit} className="search-form text-center">
            <InputGroup>
              <span className="input-group-text" id="addon-wrapping"><SearchIcon/></span>
              <FormControl type="text" placeholder="Search for images"value={query} onChange={(e) => setQuery(e.target.value)} />
              <ColorButton variant="contained" type="submit">Search</ColorButton>
            </InputGroup>
          </Form>
      <Row className="mt-5">
        {imageList}
      </Row>
    </Container>

  );
}

export default SearchImages;

  