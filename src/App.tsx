import "./App.css";
import { Navbar } from "./components/Navbar";
import { CountryList } from "./pages/CountryList";

export const App = () => {
  return (
    <>
      <Navbar />
      <CountryList />
    </>
  );
};
