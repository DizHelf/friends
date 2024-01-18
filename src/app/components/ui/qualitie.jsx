import React from 'react';

const Qualitie = (props) => {
    const {item} = props
    return(
        <span className={"badge m-1 bg-" + item.color}>
            {item.name}
        </span>
    );
};

export default Qualitie;