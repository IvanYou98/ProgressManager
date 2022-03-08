import React from 'react';

function Input({type, placeholder, name, value, onChange}) {
    return (
        <div className="form-group">
            <input
                type={type}
                className="form-control form-control-lg"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;