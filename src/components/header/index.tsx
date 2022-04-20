/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiUser,
  FiLock,
  FiLogOut
} from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi'

import logo from '../../assets/images/header-images/logo.png'
import kallarari from '../../assets/images/header-images/kallarari.png'
import karenRobinson from '../../assets/images/header-images/karen-robinson.png'
import Navbar from '../navbar'
import Sidebar from './sidebar'

interface Props {
  username: string
  profilePic: string
  message: string
  notification: string
  timeAgo: string
}

const Header: React.FC<Props> = ({ username, profilePic }: Props) => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenuClick = () => setOpenMenu(!openMenu)

  const [openNotifications, setOpenNotifications] = useState(false)
  const handleNotificationsClick = () =>
    setOpenNotifications(!openNotifications)

  const notifications = [
    {
      username: 'Cristina Pride',
      profilePic: kallarari,
      message: 'Hi, How are you? What about our next meeting'
    },
    {
      notification: 'Caleb Flakelar commented on Admin',
      profilePic: kallarari,
      timeAgo: '1 min ago'
    },
    {
      username: 'Karen Robinson',
      profilePic: karenRobinson,
      message: 'Wow ! this admin looks good and awesome design'
    },
    {
      notification: 'New user registered.',
      profilePic: kallarari,
      timeAgo: '5 hours ago'
    },
    {
      notification: 'Caleb Flakelar commented on Admin',
      profilePic: kallarari,
      timeAgo: '4 days ago'
    },
    {
      notification: 'Carlos Crouch liked Admin',
      profilePic: kallarari,
      timeAgo: '13 days ago'
    }
  ]

  return (
    <Container>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo Adminto" />
        </div>
        <div className="header-content">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FiSearch className="search-icon icon" />
          </div>
          <div className="header-menu">
            <div
              className={`bell-icon ${
                openNotifications ? 'active' : 'inactive '
              }`}
              onClick={handleNotificationsClick}
            >
              <FiBell className="icon" />
            </div>
            <div
              className={`username ${openMenu ? 'active' : 'inactive'}`}
              onClick={handleMenuClick}
            >
              <img
                src={profilePic}
                alt="Foto de Perfil"
                className="profile-pic"
              />
              <h6>{username}</h6>
              <FiChevronDown
                className={`arrow-icon icon ${
                  openMenu ? 'active' : 'inactive'
                }`}
              />
            </div>
            {openMenu && (
              <div className={`menu ${openMenu ? 'active' : 'inactive'}`}>
                <h6>Welcome!</h6>
                <ul>
                  <li>
                    <FiUser className="username-icon icon" />
                    My Account
                  </li>

                  <li>
                    <FiLock className="username-icon icon" />
                    Lock Screen
                  </li>
                  <hr />
                  <li>
                    <FiLogOut className="username-icon icon" />
                    Logout
                  </li>
                </ul>
              </div>
            )}

            {openNotifications && (
              <div
                className={`notifications ${
                  openNotifications ? 'active' : 'inactive'
                }`}
              >
                <div className="notification-title">
                  <h4>Notification</h4>
                  <h6>Clear All</h6>
                </div>

                <div className="notification-items">
                  {notifications.map(
                    ({
                      username,
                      profilePic,
                      message,
                      notification,
                      timeAgo
                    }) => (
                      <div className="notification">
                        <img
                          src={profilePic}
                          alt="Foto de perfil do usuário"
                          className="profile-pic"
                        />
                        <div className="notification-text">
                          <h6>{username}</h6>
                          <p>{message}</p>
                        </div>

                        <div>
                          <h6>{notification}</h6>
                          <p>{timeAgo}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="view-all">
                  <p>View all</p>
                  <HiArrowNarrowRight className="arrow-icon" />
                </div>
              </div>
            )}

            <div className="wheel-icon">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Navbar menuItems={''} active={false} open={false} />
    </Container>
  )
}

export default Header
