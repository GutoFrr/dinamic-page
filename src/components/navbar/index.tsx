/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'

interface SubItem {
  name: string
  subSubItem?: string[]
}

interface Props {
  menuItems: string
  subItems?: SubItem[]
  active: boolean
  open: boolean
}

const Navbar: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuArray = [
    {
      menuItems: 'Dashboard',
      active: false,
      open: false
    },
    {
      menuItems: 'UI Elements',
      subItems: [
        { name: 'Buttons' },
        { name: 'Cards' },
        { name: 'Avatars' },
        { name: 'Tabs & Accordions' },
        { name: 'Modals' },
        { name: 'Progress' },
        { name: 'Notifications' },
        { name: 'Offcanvas' },
        { name: 'Placeholders' },
        { name: 'Spinners' },
        { name: 'Images' },
        { name: 'Carousel' },
        { name: 'Embed Video' },
        { name: 'Dropdowns' },
        { name: 'Tooltips & Popovers' },
        { name: 'General UI' },
        { name: 'Typography' },
        { name: 'Grid' }
      ],
      active: false,
      open: false
    },
    {
      menuItems: 'Apps',
      subItems: [
        { name: 'Calendar' },
        { name: 'Chat' },
        { name: 'Email', subSubItem: ['Inbox', 'Email Templates'] },
        { name: 'Tasks', subSubItem: ['Details', 'Kanban Board'] },
        { name: 'Projects' },
        { name: 'Contacts', subSubItem: ['Members List', 'Profile'] }
      ],
      active: false,
      open: false
    },
    {
      menuItems: 'Components',
      subItems: [
        { name: 'Widgets' },
        {
          name: 'Extended UI',
          subSubItem: [
            'Range Slider',
            'Sweet Alert',
            'Draggable Cards',
            'Tour Page',
            'Notification',
            'Tree View'
          ]
        },
        {
          name: 'Forms',
          subSubItem: [
            'General Elements',
            'Advanced',
            'Validation',
            'Wizard',
            'Quilljs Editor',
            'Picker',
            'File Uploads',
            'X Editable'
          ]
        },
        {
          name: 'Charts',
          subSubItem: [
            'Flot Charts',
            'Morris Charts',
            'Chartjs Charts',
            'Chartist Charts',
            'Sparklines Charts'
          ]
        },
        {
          name: 'Tables',
          subSubItem: [
            'Basic Tables',
            'Data Tables',
            'Editable Tables',
            'Responsive Tables',
            'Tablesaw Tables'
          ]
        },
        {
          name: 'Icons',
          subSubItem: [
            'Feather Icons',
            'Material Design Icons',
            'Dripicons',
            'Font Awesome 5',
            'Themify'
          ]
        },
        { name: 'Maps', subSubItem: ['Google Maps', 'Vector Maps'] }
      ],
      active: false,
      open: false
    },
    {
      menuItems: 'Pages',
      subItems: [
        {
          name: 'Auth Style',
          subSubItem: [
            'Log In',
            'Register',
            'Recover Password',
            'Lock Screen',
            'Confirm Mail',
            'Logout'
          ]
        },
        { name: 'Errors', subSubItem: ['Error 404', 'Error 500'] },
        {
          name: 'Utility',
          subSubItem: [
            'Pricing',
            'Timeline',
            'Invoice',
            'FAQs',
            'Gallery',
            'Maintenance',
            'Coming Soon'
          ]
        }
      ],
      active: false,
      open: false
    },
    {
      menuItems: 'Layouts',
      subItems: [
        { name: 'Horizontal' },
        { name: 'Vertical' },
        { name: 'Preloader' }
      ],
      active: true,
      open: false
    }
  ]

  return (
    <Container>
      <div className="navbar">
        {menuArray.map((item, e) => (
          <ul className="menu-items">
            {item.menuItems}

            <li
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              {showMenu && <div>AAAAAAa</div>}
            </li>
          </ul>
        ))}
      </div>
    </Container>
  )
}

export default Navbar
