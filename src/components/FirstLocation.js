import LoadWeatherBtn from './LoadWeatherBtn';

const FirstLocation = (props) => {

  const {successful, loading, handleClick} = props;

  return (
    <div className={successful ? "hidden pre-load-content" : "pre-load-content"}>
      <p className="load-weather-text">Type a UK City</p>
      <form onSubmit={handleClick}> 
        <input type="text" id="first-input" className="input-field" name="city-input" placeholder="London... etc" required/>
        <LoadWeatherBtn  
        handleClick={handleClick}
        loading={loading}
        />
      </form>
    </div>
  )
}

export default FirstLocation;