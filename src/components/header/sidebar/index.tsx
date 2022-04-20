import React, { useState } from 'react'
import Container from './styles'
import {
  MdClose,
  MdToggleOn,
  MdToggleOff,
  MdShoppingBasket
} from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'

interface ItemProps {
  menu?: string
  menuItems?: string[]
}

const Sidebar: React.FC<ItemProps> = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleClickSidebar = () => setOpenSidebar(!openSidebar)

  return (
    <Container>
      <div>
        <FiSettings className="settings-icon" onClick={handleClickSidebar} />
      </div>

      <div className={`settings ${openSidebar ? 'active' : 'inactive'}`}>
        <div className="sidebar-title">
          <h4>Theme Customizer</h4>
          <div className="close-icon">
            <MdClose
              className="settings-icon-close"
              onClick={handleClickSidebar}
              size={16}
            />
          </div>
        </div>
        <div className="sidebar-settings">
          <div className="settings-description">
            <p>
              <strong>Customize</strong> the overall color scheme, Layout, etc.
            </p>
          </div>
          <div className="settings-btns">
            <div className="toggle-container">
              <h6>Color Scheme</h6>
              <div>
                <MdToggleOn className="toggle-on" />
                <h5>Light Mode</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>Dark Mode</h5>
              </div>
            </div>
            <div className="toggle-container">
              <h6>Width</h6>
              <div>
                <MdToggleOn className="toggle-on" />
                <h5>Fluid</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>Boxed</h5>
              </div>
            </div>
            <div className="toggle-container">
              <h6>Menus (Leftsidebar and Topbar) Position</h6>
              <div>
                <MdToggleOn className="toggle-on" />
                <h5>Fixed</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>Scrollable</h5>
              </div>
            </div>
            <div className="toggle-container">
              <h6>Left Sidebar Color</h6>
              <div>
                <MdToggleOn className="toggle-on" />
                <h5>Light</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>Dark</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>Brand</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>Gradient</h5>
              </div>
            </div>
            <div className="toggle-container">
              <h6>Left Sidebar Size</h6>
              <div>
                <MdToggleOn className="toggle-on" />
                <h5>Default</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>
                  Condensed <small>(Extra Small size)</small>
                </h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>
                  Compact <small>(Small size)</small>
                </h5>
              </div>
            </div>
            <div className="toggle-container">
              <h6>Sidebar User Info</h6>
              <div>
                <MdToggleOn className="toggle-on" />
                <h5>Enable</h5>
              </div>
            </div>
            <div className="toggle-container">
              <h6>Topbar</h6>
              <div>
                <MdToggleOn className="toggle-on" />
                <h5>Dark</h5>
              </div>
              <div>
                <MdToggleOff className="toggle-off" />
                <h5>Light</h5>
              </div>
            </div>
          </div>
          <div className="bottom-btns">
            <div className="blue-btn">
              <p>Reset to Default</p>
            </div>
            <div className="red-btn">
              <MdShoppingBasket className="shopping-basket" />
              <p>Purchase Now</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Sidebar
