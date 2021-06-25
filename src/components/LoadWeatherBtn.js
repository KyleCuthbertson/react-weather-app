import styled from 'styled-components';

const LoadWeatherButton = styled.button`
  color: #FFF;
  min-width: 220px;
  background: transparent;
  border: 3px solid #FFF;
  border-radius: 4px;
  font-size: 22px;
  padding: 10px 25px;
  cursor: pointer;
  display: block;
  margin: 30px auto;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  &:hover {
    background: #10263a;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
    min-width: 280px;
  }
`

const LoadWeatherBtn = (props) => {
  const { id, handleClick, loading } = props;
  return (
    <LoadWeatherButton id={id} type="submit" onClick={handleClick}>{loading ? "Please wait..." : "Load Weather"}</LoadWeatherButton>
  )
}

export default LoadWeatherBtn;