import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const { data } = await axios.get(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    setCountries(() => data);
  };

  useEffect(() => {
    try {
      getCountries();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:countryId"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
