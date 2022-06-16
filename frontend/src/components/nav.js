import React, { useState } from 'react';
import Logo from "../img/navlogo.png"
import "./nav.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {

   // get user
   const user = JSON.parse(localStorage.getItem('user'))
  const {value} = useSelector (state=> state.cart)
  var num = value.length
 
const navigate = useNavigate()
function handleClick (){
  navigate("/cart")
  setmenu(false)
}
function gotoproducts(){
  navigate("products")
  setmenu(false)
}
// handleMenu
const [menu, setmenu] = useState ()
function handleMenu(){
   setmenu(!menu)
}
function accounts(){
  navigate("signup")
  setmenu(false)
}

  return (
    <div className='nav-container' id={menu ? 'menu' : ''}>
       
       {/* logo 1 */}
      <div className={menu ? 'logo_menu2': 'logo_menu'}>
        <div className='menuicon1' onClick={handleMenu}>
        <MenuIcon/>
        </div>
        <Link to = "/">
          <img className='logo' src={Logo} alt="" />
          </Link>
      </div>

      <div className = { menu ? 'dep' : 'dep2'} onClick={gotoproducts}>
        <h3>Top Department</h3>
        <ul>
          <li>Sneakers</li>
          <li>Electronics</li>
          <li>Phones</li>
          <li>Health And Beautiy</li>
          <li>Books</li>
          <li>PC</li>
          <li>Accessories</li>
        </ul>

      </div>
       
       {/*  locatiom*/}
      <div className={menu ? 'location2' : 'location'}>
          <div>
               <LocationOnOutlinedIcon/>
          </div>
          <div>
              <span className='deliver'>Deliver to<br></br></span>
              <span>US</span>
          </div>
        </div>
          
          {/* search 2*/}
           
         <div className={menu ? 'hidesearch': 'search'}>
            <input className='search-input' type="text" placeholder = 'search' />
            <div className='search-icon' onClick={gotoproducts}>
            <SearchIcon />
            </div>
         </div>   

              {/* countries drop down list */}
           <div className='countries'>
            <span>🏳️</span>
           </div>

            {/* login and sing up 3*/}
           
           <div className={menu ? 'login-singin2' : 'login-singin'} onClick={accounts}>
              <span >Hello,<br></br></span>
              <span className='accounts'>{user ? user.name : "Sign in"}</span>
           </div>

             {/* Returns and orders */}
             <div className={menu ? 'returns2' : 'returns'} onClick={handleClick}>
                <span >Returns<br></br></span>
                 <span className='accounts'>& Orders</span>
             </div>

               {/* shopping cart 4*/}
               <div className={menu ? 'cart2': 'cart'} onClick={handleClick}>
                  <p>{num}</p>
                 < ShoppingCartCheckoutOutlinedIcon  />
               </div>
      

    </div>
    
  )
}

export default Nav