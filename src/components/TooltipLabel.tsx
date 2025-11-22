import React from 'react';

interface TooltipLabelProps {
  label: React.ReactNode;
  description: string;
}

export const TooltipLabel: React.FC<TooltipLabelProps> = ({ label, description }) => {
  return (
    <div className="tooltip-container">
      <label>{label}</label>
      <div className="tooltip-content">
        {description}
      </div>
    </div>
  );
};