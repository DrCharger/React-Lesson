import React from 'react';

const Expand = ({ children, title, isOpen, handleChange }) => {
  let icon;
  if (isOpen) {
    icon = <i className="fas fa-chevron-up"></i>;
  } else {
    icon = <i className="fas fa-chevron-down"></i>;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={handleChange}>
          {icon}
        </button>
      </div>
      <div class="expand__content">{children}</div>
    </div>
  );
};

export default Expand;
