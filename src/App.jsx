import "./App.css";
import "./nav.css";
import "./reset.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Difference from "./components/Difference";
import Poslugi from "./components/Poslugi";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2";
import Review from "./components/Review";
import Price from "./components/Price";
import Marafon from "./components/Marafon";
import Questions from "./components/Questions";
import Questions2 from "./components/Questions2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Hello />
      <Difference />
      <Poslugi />
      <Info1 />
      <Review />
      <Price />
      <Info2 />
      <Marafon />
      <Questions />
      <Questions2 />
      <Footer />
    </>
  );
}

export default App;
