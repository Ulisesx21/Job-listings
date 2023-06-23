import HeaderDesktop from "./icons/bg-header-desktop.svg";
import HeaderMobile from "./icons/bg-header-mobile.svg";
import { FilterBar } from "./components/FilterBar";
import { JobsList } from "./components/JobsList";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="img-container">
        <img src={HeaderDesktop} alt="img" className="header-desktop" />
        <img src={HeaderMobile} alt="img" className="header-mobile" />
      </div>
      <FilterBar />
      <JobsList />
    </div>
  );
}

export default App;
