import React from 'react';

const Expand = ({ children, title, isOpen, handleChange }) => {
  let icon;
  let content;
  if (!isOpen) {
    icon = <i className="fas fa-chevron-up"></i>;
    content = <div className="expand__content">{children}</div>;
  } else {
    icon = <i className="fas fa-chevron-down"></i>;
    content = null;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={handleChange}>
          {icon}
        </button>
      </div>
      {content}
    </div>
  );
};

export default Expand;
