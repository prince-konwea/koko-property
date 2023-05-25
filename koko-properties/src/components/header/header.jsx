import React from 'react';
import "./header.css"

const Header = () => {
    return(
        <>
        <div className='container'>
        
            {/* header-menu */}
            <div className='header_option'>
              <div className="div">APARTMENTS</div>
              <div className="div">AMENITIES</div>
              <div className="div">COMMUNITY</div>
              <div className="div">LOCATION</div>
              <div className="header_menu-5">MORE
              <div className='menu-5_svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
              </div>

              </div>
          </div>
            {/* logo */}
            <div className='header_logo'>
               <h1>KONWEA </h1>
            </div>
              {/* Cart */}
              <div className='header_cart'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

              </div>
        </div>
          <div className='header-line'></div> 

          <div className='selected'>
              <div className='select_option-1'>
                <h2>Apartments</h2>
              </div>
              <div className='select_option-2'>
                SORT BY FEATURED
              </div>
            </div>        
        </>

    
    )
}

export default Header;


