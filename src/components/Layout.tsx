import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav>Navigation</nav>
      <main>{children}</main>
    </>
  )
}

export default Layout
