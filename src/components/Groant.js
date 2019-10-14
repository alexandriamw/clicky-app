import React from 'react';

function Groant(props) {
    return (
        <div className="grid-item"><img src={`images/groant_${props.photoId}.jpg`} alt={props.alt} /></div>
    );
}

export default Groant;