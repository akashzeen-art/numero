import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/portfolio', label: 'Portfolio' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>NUMERO INFO</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
            <ul className="navbar-nav">
              {navLinks.map(({ to, label }) => (
                <li key={to} className={`nav-item mx-2${pathname === to ? ' active' : ''}`}>
                  <Link className="nav-link" to={to} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
