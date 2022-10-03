import React from 'react';

const Expand = ({ children, title, isOpen, onOpen, onClose }) => {
  let icon;
  let content;
  if (!isOpen) {
    icon = <i className="fas fa-chevron-up" onClick={onOpen}></i>;
    content = <div className="expand__content">{children}</div>;
  } else {
    icon = <i className="fas fa-chevron-down" onClick={onClose}></i>;
    content = null;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn">{icon}</button>
      </div>
      {content}
    </div>
  );
};

export default Expand;
