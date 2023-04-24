import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Header className="header" />
        <Jobs className="jobs" />
        <Footer className="footer"/>
      </div>
    </>
  );
};

export default App;
