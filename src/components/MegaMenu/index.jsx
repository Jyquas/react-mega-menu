import React, { useState, useEffect } from 'react'

// Components
import HamburgerButton from '../Buttons/Hamburger'

// State Machines
import { MenuStateMachine } from '../../state-machines/menus'

// CSS
import './index.scss'

const MegaMenu = () => {
  const [megaMenuState, setMegaMenuState] = useState('')
  const [subMenuState, setSubMenuState] = useState('')
  const [subSubMenuState, setSubSubMenuState] = useState('')
  const [activeMenus, setActiveMenus] = useState([]) // array that captures the ids of active menus
  const [viewportWidth, setViewportWidth] = useState(368) // array that captures the ids of active menus

  const viewportLarge = 1024

  const resetMenus = () => {
    setActiveMenus([])
    setSubMenuState('closed')
    setSubSubMenuState('closed')
  }

  const updateActiveMenus = (state, menuId) => {
    if (state === 'open') {
      // add menuId from activeMenus
      setActiveMenus([...activeMenus, menuId])
    } else if (state === 'closed') {
      // remove menuId from activeMenus
      setActiveMenus(activeMenus.filter((item) => item !== menuId))
    }
  }

  const toggleMegaMenu = (e, menuId) => {
    e.preventDefault()

    const nextState = MenuStateMachine(megaMenuState)

    setMegaMenuState(nextState)

    updateActiveMenus(nextState, menuId)

    if (megaMenuState === 'open') {
      resetMenus()
    }
  }

  const toggleSubMenu = (e, menuId) => {
    e.preventDefault()

    const nextState = MenuStateMachine(subMenuState)

    setSubMenuState(MenuStateMachine(subMenuState))
    /* 
      I haven't come up with single solution (yet) that takes care of 
      opening and closing menus for both small and large screens, so for 
      now I fork the logic based on viewport size.
      */
    if (viewportWidth >= viewportLarge) {
      // hide all menus for large screens, show the menu clicked
      setActiveMenus([menuId])
    } else {
      // remove menuId from activeMenus
      updateActiveMenus(nextState, menuId)
    }
  }

  const toggleSubSubMenu = (e, menuId) => {
    e.preventDefault()

    const nextState = MenuStateMachine(subSubMenuState)

    setSubSubMenuState(MenuStateMachine(subSubMenuState))

    updateActiveMenus(nextState, menuId)
  }

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    console.log(`activeMenus = ${activeMenus}`)
  }, [activeMenus, viewportWidth])

  return (
    <div role="navigation" className="nav__container">
      <HamburgerButton
        label="Menu"
        state={megaMenuState}
        onClick={(e) => toggleMegaMenu(e, 'nav-main')}
      />
      <nav
        className={`nav__menu-container ${`nav--${megaMenuState}`}`}
        aria-label="Main Navigation"
      >
        <ul
          role="menubar"
          aria-hidden="false"
          aria-label="Main Menu"
          className="nav__list"
          id="menubar-main"
        >
          <li role="none" id="nav-home" className="nav__item">
            <a
              role="menuitem"
              id="menuitem-home"
              href="/"
              className="nav__item--link"
            >
              Home
            </a>
          </li>
          <li
            role="none"
            id="nav-Mega-Menu"
            className="nav__item nav__item--has-children"
          >
            <a
              role="menuitem"
              id="menuitem-Mega-Menu"
              href="/"
              className="nav__item--link nav__item--link-forward"
              onClick={(e) => toggleSubMenu(e, 'menu-Mega-Menu')}
              aria-haspopup="true"
              aria-controls="menu-Mega-Menu"
            >
              Mega Menu
            </a>
            <ul
              role="menu"
              className={`nav__list nav__sub nav__mega ${
                (activeMenus.includes('menu-Mega-Menu') && `nav--open`) ||
                `nav--closed`
              }`}
              id="menu-Mega-Menu"
              aria-hidden="true"
              aria-labelledby="menu-Mega-Menu"
            >
              <li
                role="none"
                id="nav-Mega-Menu-back"
                className="nav__item nav__item--heading"
              >
                <a
                  role="menuitem"
                  id="menuitem-Mega-Menu-back"
                  href="/"
                  className="nav__item--link nav__item--link-back"
                  onClick={(e) => toggleSubMenu(e, 'menu-Mega-Menu')}
                  aria-haspopup="true"
                  aria-controls="nav-main-Mega-Menu"
                >
                  Mega-Menu
                </a>
              </li>
              <li
                role="none"
                id="nav-Mega-Menu-Sub-menu-item-1"
                className="nav__item"
              >
                <a
                  role="menuitem"
                  id="menuitem-Mega-Menu-Sub-menu-item-1"
                  href="/"
                  className="nav__item--link"
                >
                  Sub menu item 1
                </a>
              </li>
              <li
                role="none"
                id="nav-Mega-Menu-Sub-menu-item-2"
                className="nav__item"
              >
                <a
                  role="menuitem"
                  id="menuitem-Mega-Menu-Sub-menu-item-2"
                  href="/"
                  className="nav__item--link"
                >
                  Sub menu item 2
                </a>
              </li>
              <li
                role="none"
                id="nav-Mega-Menu-Sub-menu-item-3"
                className="nav__item nav__item--has-children"
              >
                <a
                  role="menuitem"
                  id="menuitem-Mega-Menu-Sub-menu-item-3"
                  href="/"
                  className="nav__item--link nav__item--link-forward"
                  onClick={(e) =>
                    toggleSubSubMenu(e, 'menu-Mega-Menu-Sub-menu-item-3')
                  }
                  aria-haspopup="true"
                  aria-controls="menu-Mega-Menu-Sub-menu-item-3"
                >
                  Sub menu item 3
                </a>
                <ul
                  role="menu"
                  id="menu-Mega-Menu-Sub-menu-item-3"
                  className={`nav__list nav__sub nav__sub-sub nav__mega ${
                    (activeMenus.includes('menu-Mega-Menu-Sub-menu-item-3') &&
                      `nav--open`) ||
                    `nav--closed`
                  }`}
                  aria-hidden="true"
                  aria-labelledby="menuitem-Mega-Menu-Sub-menu-item-3"
                >
                  <li
                    role="none"
                    id="nav-Mega-Menu-Sub-menu-item-3-back"
                    className="nav__item nav__item--heading"
                  >
                    <a
                      role="menuitem"
                      id="menuitem-Mega-Menu-Sub-menu-item-3-back"
                      href="/"
                      className="nav__item--link nav__item--link-back"
                      onClick={(e) =>
                        toggleSubSubMenu(e, 'menu-Mega-Menu-Sub-menu-item-3')
                      }
                      aria-haspopup="true"
                      aria-controls="menu-Mega-Menu-Sub-menu-item-3"
                    >
                      Sub menu item 3
                    </a>
                  </li>
                  <li
                    role="none"
                    id="nav-Mega-Menu-Sub-menu-item-3.1"
                    className="nav__item"
                  >
                    <a
                      role="menuitem"
                      id="menuitem-Mega-Menu-Sub-menu-item-3.1"
                      href="/"
                      className="nav__item--link"
                    >
                      Sub menu item 3.1
                    </a>
                  </li>
                  <li
                    role="none"
                    id="nav-Mega-Menu-Sub-menu-item-3.2"
                    className="nav__item"
                  >
                    <a
                      role="menuitem"
                      id="menuitem-Mega-Menu-Sub-menu-item-3.2"
                      href="/"
                      className="nav__item--link"
                    >
                      Sub menu item 3.2
                    </a>
                  </li>
                  <li
                    role="none"
                    id="nav-Mega-Menu-Sub-menu-item-3.3"
                    className="nav__item nav__item--has-children"
                  >
                    <a
                      role="menuitem"
                      id="menuitem-Mega-Menu-Sub-menu-item-3.3"
                      href="/"
                      className="nav__item--link"
                    >
                      Sub menu item 3.3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            role="none"
            id="nav-Simple-Menu"
            className="nav__item nav__item--has-children"
          >
            <a
              role="menuitem"
              id="menuitem-Simple-Menu"
              href="/"
              className="nav__item--link nav__item--link-forward"
              onClick={(e) => toggleSubMenu(e, 'menu-Simple-Menu')}
              aria-haspopup="true"
              aria-controls="menu-Simple-Menu"
            >
              Simple Menu
            </a>
            <ul
              role="menu"
              className={`nav__list nav__sub ${
                (activeMenus.includes('menu-Simple-Menu') && `nav--open`) ||
                `nav--closed`
              }`}
              id="menu-Simple-Menu"
              aria-hidden="true"
              aria-labelledby="menu-Simple-Menu"
            >
              <li
                role="none"
                id="nav-Simple-Menu-back"
                className="nav__item nav__item--heading"
              >
                <a
                  role="menuitem"
                  id="menuitem-Simple-Menu-back"
                  href="/"
                  className="nav__item--link nav__item--link-back"
                  onClick={(e) => toggleSubMenu(e, 'menu-Simple-Menu')}
                  aria-haspopup="true"
                  aria-controls="nav-main-Simple-Menu"
                >
                  Simple Menu
                </a>
              </li>
              <li
                role="none"
                id="nav-Simple-Menu-Sub-menu-item-1"
                className="nav__item"
              >
                <a
                  role="menuitem"
                  id="menuitem-Simple-Menu-Sub-menu-item-1"
                  href="/"
                  className="nav__item--link"
                >
                  Sub menu item 1
                </a>
              </li>
              <li
                role="none"
                id="nav-Simple-Menu-Sub-menu-item-2"
                className="nav__item"
              >
                <a
                  role="menuitem"
                  id="menuitem-Simple-Menu-Sub-menu-item-2"
                  href="/"
                  className="nav__item--link"
                >
                  Sub menu item 2
                </a>
              </li>
              <li
                role="none"
                id="nav-Simple-Menu-Sub-menu-item-3"
                className="nav__item"
              >
                <a
                  role="menuitem"
                  id="menuitem-Simple-Menu-Sub-menu-item-3"
                  href="/"
                  className="nav__item--link"
                >
                  Sub menu item 3
                </a>
              </li>
            </ul>
          </li>
          <li role="none" id="nav-contact" className="nav__item">
            <a
              role="menuitem"
              id="menuitem-contact"
              href="/"
              className="nav__item--link"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MegaMenu
