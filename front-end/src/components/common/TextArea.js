import React from 'react';

function TextArea({placeholder, name, value, onChange}) {
    return (
        <div className="form-group">
            <textarea
                className="form-control form-control-lg"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default TextArea;