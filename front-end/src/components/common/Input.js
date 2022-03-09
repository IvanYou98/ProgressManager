import React from 'react';

function Input({type, placeholder, name, value, onChange, className}) {
    return (
        <div className="form-group">
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;