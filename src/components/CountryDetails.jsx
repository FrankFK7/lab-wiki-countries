import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const style = {
  position: 'fixed',
  top: '10%',
  left: '70%',
  border: '2px solid black',
};

const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const findCountry = () => {
    setSelectedCountry(() =>
      countries.find((country) => country.alpha2Code === countryId)
    );
  };

  const findBorderCountriesNames = (border) => {
    return countries.find((country) => country.alpha2Code === border);
  };

  useEffect(() => {
    findCountry();
  }, [countryId]);

  return (
    <div style={style}>
      {selectedCountry && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}
          />
          <p>Name:{selectedCountry.name.common} </p>

          <ul>
            {selectedCountry.borders.map((border) => {
              const borderCountry = findBorderCountriesNames(border);
              return (
                <Link to={`/${border}`}>
                  <li>{borderCountry.name.common}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default CountryDetails;
