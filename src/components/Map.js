import React from 'react';
import GoogleMapReact from 'google-map-react'
import '../App.css'
import { LocationPin } from './LocationPin';
export const Map=({location,zoomlevel,text})=> {
    // const defaultProps = {
    //     address:'hola',
    //     center: {
    //       lat: -5.264162915747463,
    //       lng: -75.4203748313204
    //     },
    //     zoom: 17
    //   };
    // exact le dice a react router que se tiene que utilizar la ruta exactamente como esta escrita
    // <Route exact path="/" component={HomeScreen}/>
    const {address,center,zoom}=location
    return (
        <div style={{ height: '95vh', width: '100%' }}>
            {/* <h2 className="map-h2">"Chascakunac Chaupinpi"</h2>
            <blockquote class="blockquote text-center">
                <p>"Chascakunac Chaupinpi"</p>
            </blockquote> */}
            <figure class="text-center">
            <blockquote class="blockquote">
                <p>Chascakunac Chaupinpi</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                 <cite title="Source Title">DIODE</cite>
            </figcaption>
            </figure>
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCcfQ0CpwCnWbXz043Q0FUgYfD7FIi_OMI' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
              <LocationPin
                lat={center.lat}
                lng={center.lng}
                text={address}
                />   
            </GoogleMapReact>
            </div>
        </div>
    );
}