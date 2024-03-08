import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideBarBtn({ label, icon, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link className='' to={to}>
      <div
        className={`bg-[#3e365a] text-white font-manrope text-md w-[100%] h-[50px] flex items-center px-[10px] hover:bg-[#ef2253] ${
          isActive ? 'border-l-8 border-[#ef2253]' : ''
        }`}
      >
        {icon && <span className='mr-2 fill-current text-2xl'>{icon}</span>}
        {label}
      </div>
    </Link>
  );
}

export default SideBarBtn;
