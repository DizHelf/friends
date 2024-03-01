import React from 'react';

const TextField = ({label, type, name, value, onChange, error}) => {

    return (
        <div>
            {<h3>{error && error}</h3>}
            <label htmlFor={name}>{label}</label>
            <input 
                className={error ? " error" : ""}
                id={name} 
                type={type} 
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
};

export default TextField;
