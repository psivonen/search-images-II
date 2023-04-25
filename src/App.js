import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Container from "react-bootstrap/Container";
import ImageGallery from './components/ImageGallery';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Hello, Bootstrap!</h1>
        <p>This is my React application with Bootstrap.</p>
        <ImageGallery />
      </Container>
      <Footer/>
    </>
  );
};

export default App;
