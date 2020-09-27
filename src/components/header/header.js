import { Link } from "gatsby"
import React, { useState } from "react"
import { activeMenuItemStyles, openStyles, mobileDropdownMenuStyles, hamMenu, desktopNav, mobileNav, header, container, logo, cartButton, menuItem, cartContainer } from './header.module.scss'
import Logo from '../../images/praktik_logo.svg'
import { MdShoppingCart } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { homePageNavItems, navItems } from '../../constants/nav_items'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { useLocation } from '@reach/router'

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
        <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <MobileDropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header >
  )
}

const MobileNav = ({ setIsOpen, isOpen }) => {
  return (
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
  )
}

const MobileDropdownMenu = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation()


  return (
    <div className={isOpen ? openStyles : mobileDropdownMenuStyles}>
      {pathname === '/' ? (
        <ul>
          {homePageNavItems.map(({ id, name, slug }) => (
            <ScrollNavItem key={id} slug={slug} setIsOpen={setIsOpen}>{name}</ScrollNavItem>
          ))}
          <li>
            <Link activeClassName={activeMenuItemStyles} className={menuItem} to='/kategorie'>Kategorie</Link>
          </li>
        </ul>
      ) : (
          <ul>
            {navItems.map(({ id, name, slug }) => (
              <LinkNavItem key={id} slug={slug} >{name}</LinkNavItem>
            ))}
          </ul>
        )}
    </div>
  )

}

const NavList = () => {
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      {pathname === '/' ? (
        <ul>
          {homePageNavItems.map(({ id, name, slug }) => (
            <ScrollNavItem key={id} slug={slug} >{name}</ScrollNavItem>
          ))}
          <li>
            <Link activeClassName={activeMenuItemStyles} className={menuItem} to='/kategorie'>Kategorie</Link>
          </li>
        </ul>
      ) : (
          <ul>
            {navItems.map(({ id, name, slug }) => (
              <LinkNavItem key={id} slug={slug} >{name}</LinkNavItem>
            ))}
          </ul>
        )}

      <li className={cartContainer}>
        <button className={cartButton + " snipcart-checkout"}>
          <span className="snipcart-items-count"></span>
          <MdShoppingCart />
        </button>
        <span className="snipcart-total-price"></span>
      </li>
    </React.Fragment>
  )
}

const ScrollNavItem = ({ children, slug, setIsOpen }) => {
  return (
    <li>
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

const LinkNavItem = ({ children, slug }) => {
  return (
    <li>
      <Link activeClassName={activeMenuItemStyles} className={menuItem} to={slug}>{children}</Link>
    </li>
  )
}

export default Header
