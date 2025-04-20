import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  id,
  label,
  placeholder = '',
  value,
  onChange,
  className = '',
  type = 'text',
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label
        htmlFor={id}
        className="text-main text-lg font-semibold capitalize"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-[#e9e9e9] outline-none mt-2"
      />
    </div>
  );
};

// Prop validation using PropTypes
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
