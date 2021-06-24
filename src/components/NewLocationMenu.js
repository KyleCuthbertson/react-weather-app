import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import LoadWeatherBtn from './LoadWeatherBtn';

const NewLocationMenu = (props) => {

  const { successful, loading, handleClick } = props;
  const [newLocationToggle, setNewLocationToggle] = useState(false);

  useEffect( () => {
    setNewLocationToggle(false);
  }, [loading])

  return (
    <>
    <CSSTransition in={newLocationToggle} timeout={400} classNames="menuTransition">
      <div className={successful && newLocationToggle ? "new-location-wrapper" : null}>
        <div className={newLocationToggle ? "new-location-menu" : "hidden"}>
          <div className="new-location-content">
            <p>Try a different location</p>
            <form onSubmit={handleClick}> 
              <input type="text" id="new-input" className="input-field" name="city-input" placeholder="Manchester... etc" required/>
              <LoadWeatherBtn id="new-location-submit" handleClick={handleClick} loading={loading}/>
            </form>
            <span id="newLocationClose" onClick={() => {setNewLocationToggle(false)}} className="close-new-location-menu"><i className="fas fa-times"></i></span>
          </div>
        </div>
      </div>
    </CSSTransition>
      <span id="newLocationOpen" onClick={() => {setNewLocationToggle(true)}} className={newLocationToggle || successful ? "open-new-location-menu" : "hidden"}><i className="fas fa-search-location"></i></span>
    </>
  )
}

export default NewLocationMenu;