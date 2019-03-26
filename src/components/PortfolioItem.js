import React from 'react';

const PortFolioItem = (props) => {
    console.log(props);
    return (
        <div>
            <h2>A Thing I've Done</h2>
            <p>This page is for the item with an id of {props.match.params.id}</p>
        </div>
    )
}

export default PortFolioItem;