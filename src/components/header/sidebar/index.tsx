import React, { useState } from 'react'
import Container from './styles'
import { MdClose } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'

interface ItemProps {
  menu?: string
  menuItems?: string[]
}

const Sidebar: React.FC<ItemProps> = () => {
  const [openSidebar, setOpenSidebar] = useState(true)
  const handleClickSidebar = () => setOpenSidebar(!openSidebar)

  return (
    <Container>
      <div>
        <FiSettings className="settings-icon" onClick={handleClickSidebar} />
      </div>

      <div className={`settings ${openSidebar ? 'active' : 'inactive'}`}>
        <div className="sidebar-title">
          <h4>Theme Customizer</h4>
          <div className="blabla">
            <MdClose
              className="settings-icon-close"
              onClick={handleClickSidebar}
              size={16}
            />
          </div>
        </div>
        <div className="settings-btns">
          <div>Home</div>
          <div>Resume</div>
          <div>Works</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
      </div>
    </Container>
  )
}

export default Sidebar
