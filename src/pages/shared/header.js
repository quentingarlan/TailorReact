import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/cartContext';
import { CartIcon} from '../../components/icons'
import styles from './header.module.scss';

const Header = () => {
   const { itemCount } = useContext(CartContext);
   return (
      <header className={styles.header}>
         <h3>MY TAILOR</h3>
         <Link to='/'>Store</Link>
         <Link to='/about'>About</Link>
         <Link to='/cart'> <CartIcon/> Cart ({itemCount})</Link>
      </header>
   );
}

export default Header;