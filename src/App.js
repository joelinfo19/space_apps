// import logo from './logo.svg';
//import './App.css';
import { Link} from 'react-router-dom'
import { Map } from './components/Map';

export const App=() =>{
  
  // const location = {
  //   address: '1600 Amphitheatre Parkway, Mountain View, california.',
  //   lat: -5.264162915747463,
  //   lng: -75.4203748313204,
  // }
  const location = {
    address:'hola',
    center: {
      lat: -5.264162915747463,
      lng: -75.4203748313204
    },
    zoom: 10
  };
  
  return (
    <div className="container bg-primary">
      <div className="d-flex flex-column align-items-center" >
        <div className="card " style={{width: '18rem'}}>
          <img src="./images/logo.jpeg" className="card-img-top" alt="hola"/>

        </div>
       
          <Map location={location} zoomlevel={location.zoom} text={location.address}/>
        <div className="d-flex flex-column">
          <span className="fs-4">
            Latitud: {location.center.lat}
          </span>
          <span className="fs-4">
            Longitud: {location.center.lng}
          </span>
        </div>
        
        <div className="my-2">
          <Link to="/data" className="btn btn-success">
            PASAAAAAAAAAAAAAAAAA
          </Link>
       
        </div>
        
        
      </div>
      
      
     
    
    </div>
  );
}

