import { Link } from "gatsby"
import React from "react"
import { header, container, logo } from './header.module.scss'
import Logo from '../../images/praktik_logo.svg'
import { MdShoppingCart } from 'react-icons/md'
import { navItems } from '../../constants/nav_items'

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
        navItems.map(({ id, name, slug }) => (
          <NavItem key={id} slug={slug}>{name}</NavItem>
        ))
      }
      <li>
        <MdShoppingCart />
      </li>
    </ul>
  )
}

const NavItem = ({ children, slug }) => {
  return (
    <li>
      <Link to={slug}>{children}</Link>
    </li>
  )
}

export default Header
