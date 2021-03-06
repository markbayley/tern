import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name, description, id} = props.data;

  return  (<Popup>
    <div className='poup-text'><strong>{name}</strong><br />{description} <br /> <img alt='robots' width="150px" src={`https://picsum.photos/150${id}?`} /></div>
  </Popup>);
};

export default MarkerPopup;