import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Container from "react-bootstrap/Container";
import SearchImages from './components/SearchImages';

const App = () => {
  return (
    <>
      <Container className='search-images'>
        <SearchImages />
      </Container>
      <Footer/>
    </>
  );
};

export default App;
