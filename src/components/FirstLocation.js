const FirstLocation = (props) => {

  const {successful, loading, handleClick} = props;

  return (
    <div className={successful ? "hidden pre-load-content" : "pre-load-content"}>
      <p className="load-weather-text">Type a UK City</p>
      <form onSubmit={handleClick}> 
        <input type="text" id="city-input" className="input-field" name="city-input" placeholder="London... etc" required/>
        <button type="submit" onClick={handleClick} className={loading ? "disabled load-weather-button" : "load-weather-button"}>{loading ? "Please wait..." : "Load Weather"}</button>
      </form>
    </div>
  )
}

export default FirstLocation;