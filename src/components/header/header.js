import { Link } from "gatsby"
import React from "react"
import { header, container, logo, cartButton, menuItem, cartContainer } from './header.module.scss'
import Logo from '../../images/praktik_logo.svg'
import { MdShoppingCart } from 'react-icons/md'
import { navItems, homePageNavItems } from '../../constants/nav_items'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Header = () => (
  <header className={header}>
    <div className={container}>
      <div>
        <Link to="/">
          <Logo className={logo} />
        </Link>
      </div>
      <nav>
        <NavList />
      </nav>
    </div>
  </header>
)

const NavList = () => {
  return (
    <ul>
      {
        homePageNavItems.map(({ id, name, slug }) => (
          <NavItem key={id} slug={slug}>{name}</NavItem>
        ))
      }
      <li className={cartContainer}>
        <button className={cartButton + " snipcart-checkout"}>
          <MdShoppingCart />
        </button>
        {/* <span class="snipcart-items-count"></span> */}
        <span className="snipcart-total-price"></span>
      </li>
    </ul>
  )
}

const NavItem = ({ children, slug }) => {
  return (
    <li>
      {/* <Link to={slug}>{children}</Link> */}
      <button className={menuItem} onClick={() => scrollTo(slug)}>{children}</button>
    </li>
  )
}

export default Header
