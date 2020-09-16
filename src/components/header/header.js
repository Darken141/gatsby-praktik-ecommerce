import { Link } from "gatsby"
import React, { useState } from "react"
import { openStyles, mobileDropdownMenuStyles, hamMenu, desktopNav, mobileNav, header, container, logo, cartButton, menuItem, cartContainer } from './header.module.scss'
import Logo from '../../images/praktik_logo.svg'
import { MdShoppingCart } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { navItems, homePageNavItems } from '../../constants/nav_items'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={header}>
      <div className={container}>
        <div>
          <Link to="/">
            <Logo className={logo} />
          </Link>
        </div>
        <nav className={desktopNav}>
          <NavList />
        </nav>
        <nav className={mobileNav}>
          <div className={cartContainer}>
            <button className={cartButton + " snipcart-checkout"}>
              <span className="snipcart-items-count"></span>
              <MdShoppingCart />
            </button>
            <span className="snipcart-total-price"></span>
          </div>
          <GiHamburgerMenu className={hamMenu} onClick={() => setIsOpen(!isOpen)} />
        </nav>
      </div>
      <MobileDropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header >
  )
}

const MobileDropdownMenu = ({ isOpen, setIsOpen }) => {

  return (
    <div className={isOpen ? `${openStyles}` : mobileDropdownMenuStyles}>
      <ul>
        {
          homePageNavItems.map(({ id, name, slug }) => (
            <NavItem key={id} slug={slug} setIsOpen={setIsOpen}>{name}</NavItem>
          ))
        }
      </ul>
    </div>
  )

}

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
          <span className="snipcart-items-count"></span>
          <MdShoppingCart />
        </button>
        <span className="snipcart-total-price"></span>
      </li>
    </ul>
  )
}

const NavItem = ({ children, slug, setIsOpen }) => {
  return (
    <li>
      {/* <Link to={slug}>{children}</Link> */}
      <button className={menuItem} onClick={() => {
        if (setIsOpen) {
          setIsOpen(false)
        }
        return scrollTo(slug)
      }
      }>{children}</button>
    </li>
  )
}

export default Header
