import { Link } from 'react-router-dom';

const style = {
  overflowY: 'scroll',
  maxHeight: '80vh',
  width: '40vw',
};

const CountriesList = ({ countries }) => {
  return (
    <div style={style}>
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            />
            <Link to={country.alpha2Code}>
              <p>{country.name.common}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default CountriesList;
