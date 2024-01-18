import "./App.css";
import Footer from "./components/Footer.js";
import SearchImages from "./components/SearchImages";
import Header from "./components/Header.js";

export default function App() {
  return (
    <main className="main">
      <Header/>
      <SearchImages />
      <Footer/>
    </main>
  );
};