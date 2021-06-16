import { useState, useEffect } from 'react';

const NewLocationMenu = (props) => {

  const { successful, loading, handleClick } = props;
  const [newLocationToggle, setNewLocationToggle] = useState(false);

  useEffect( () => {
    setNewLocationToggle(false);
  }, [loading])

  return (

  <div className={successful ? "new-location-wrapper" : "hidden"}>
    <p>Try a different location</p>
    <form onSubmit={handleClick} className={newLocationToggle ? "" : "hidden"}> 
      <input type="text" id="new-input" className="input-field" name="city-input" placeholder="Manchester... etc" required/>
      <button type="submit" id="new-location-submit" onClick={handleClick} className="load-weather-button">{loading ? "Please wait..." : "Load Weather"}</button>
    </form>
    <span id="newLocationToggle" onClick={() => {setNewLocationToggle(!newLocationToggle)}}><i className={newLocationToggle ? "fas fa-chevron-up close-btn" : "fas fa-chevron-down close-btn"}></i></span>
  </div>
  )
}

export default NewLocationMenu;