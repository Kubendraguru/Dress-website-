import React from 'react';

const Link = React.forwardRef(({ href, children, className, onClick, ...props }, ref) => {
  return (
    <a href={href || '#'} className={className} onClick={onClick} ref={ref} {...props}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';
export default Link;
