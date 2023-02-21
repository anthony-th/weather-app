import React from 'react';

function Footer() {
  return (
    <div className='py-5 text-center'>
      <p
        className='text-sm mt-2 opacity-50 font-yesteryear text-zinc-900'
      >
        &copy; 2023<a className='hover:bg-black hover:rounded hover:text-white p-1 transition-all' href="https://github.com/anthony-th" target="_blank" rel="noopener noreferrer">Anthony-th.</a>All rights reserved.
      </p>
    </div>
  )
};

export default Footer;