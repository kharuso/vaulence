import React from 'react'

const Header = ({image, title, children}) => {
  return (
    <div className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Image" />
            </div>
            <div className="header__content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </div>
  )
}

export default Header
