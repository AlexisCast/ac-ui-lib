import React from 'react';
import classNames from 'classnames';
import styles from './button.module.css';

interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'default',
  size = 'md',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        className
      )}
      style={{ backgroundColor }}
      {...props}>
      {label}
    </button>
  );
};
