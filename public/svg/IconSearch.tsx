import React from 'react';

function IconSearch({ ...props }) {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z'
        fill='black'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.957 11.957C12.2499 11.6641 12.7247 11.6641 13.0176 11.957L16.2801 15.2195C16.573 15.5124 16.573 15.9872 16.2801 16.2801C15.9872 16.573 15.5124 16.573 15.2195 16.2801L11.957 13.0176C11.6641 12.7247 11.6641 12.2499 11.957 11.957Z'
        fill='black'
      />
    </svg>
  );
}

export default IconSearch;
