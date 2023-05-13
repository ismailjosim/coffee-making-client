import React from 'react';

const InputField = ({ name, type, placeholderText }) => {
    return (
        <div className="form-control w-full">
            <label className="label font-poppins font-semibold capitalize">{ name }</label>
            <input type={ type } placeholder={ placeholderText } name={ placeholderText } className="input input-bordered input-primary w-full" />
        </div>
    );
};

export default InputField;
