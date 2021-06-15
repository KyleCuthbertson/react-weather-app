import { useState } from 'react';

const NewLocationMenu = (props) => {

  const { successful, loading, newHandleClick } = props;
  const [newLocationToggle, setNewLocationToggle] = useState(false);

  return (

  <div className={successful ? "new-location-wrapper" : "hidden"}>
    <p>Try a different location</p>
    <form onSubmit={newHandleClick} className={newLocationToggle ? "" : "hidden"} id="newLocationForm"> 
      <input type="text" id="new-input" className="input-field" name="city-input" placeholder="Manchester... etc" required/>
      <button type="submit" onClick={newHandleClick} className={loading ? "disabled load-weather-button" : "load-weather-button"}>{loading ? "Please wait..." : "Load Weather"}</button>
    </form>
    <span id="newLocationToggle" onClick={() => {setNewLocationToggle(!newLocationToggle)}}><i className={newLocationToggle ? "fas fa-chevron-up close-btn" : "fas fa-chevron-down close-btn"}></i></span>
  </div>
  )
}

export default NewLocationMenu;