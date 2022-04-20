import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);

  .header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.lightcolors.header};
    padding-inline: 120px;
    font-family: 'Roboto', sans-serif;
  }

  .header-content {
    display: flex;
    align-items: center;
  }

  .search-bar {
    width: 200px;
    color: ${props => props.theme.lightcolors.searchBarText};
    position: relative;
    z-index: 1;
    padding-right: 20px;

    input {
      padding: 7.2px 0 7.2px 20px;
      width: 180px;
      height: 38px;
      border-radius: 30px;
      border: none;
      background: ${props => props.theme.lightcolors.searchBar};
      color: white;
      position: relative;
      z-index: 1;

      :focus {
        outline: none;
      }

      ::placeholder {
        color: ${props => props.theme.lightcolors.searchBarText};
        font-weight: 300;
        line-height: 1.5;
      }
    }

    .search-icon {
      position: absolute;
      left: 74%;
      top: 30%;
      width: 15px;
      height: 15px;
      z-index: 2;
    }
  }

  .header-menu {
    display: flex;
    align-items: center;

    .bell-icon {
      padding-inline: 15px;
      padding-block: 35px;
      cursor: pointer;
    }

    .wheel-icon {
      padding-inline: 15px;
      padding-block: 35px;
    }
  }

  .bell-icon {
    position: relative;
  }

  .bell-icon.active {
    background-color: rgba(255, 255, 255, 0.03);
  }

  .notifications {
    opacity: 0;
    position: absolute;
    background-color: #fff;
    border-radius: 0.25rem;
    padding: 8px 0;
    width: 320px;
    height: 340px;
  }

  .notifications.active {
    opacity: 1;
    visibility: visible;
    top: 69.5px;
    right: 16.1%;

    .notification-title {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 20px;
      position: sticky;
      box-shadow: 0 10px 35px -2px rgba(154, 161, 171, 0.15);

      h4 {
        margin-right: auto;
      }

      h6 {
        cursor: pointer;
      }
    }

    .view-all {
      display: flex;
      justify-content: center;
      align-items: center;
      position: sticky;
      color: #71b6f9;
      font: 400 14.4px 'Roboto', sans-serif;
      padding: 18px 20px;
      cursor: pointer;

      &:hover {
        background: #f7f7f7;
      }

      .arrow-icon {
        width: 14.41px;
        height: 14.41px;
        margin-left: 3px;
      }
    }

    .notification-items {
      overflow-y: scroll;
      position: sticky;
      height: 220px;

      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: #c4c8d0;
        border-radius: 12px;
      }
    }

    .notification {
      display: flex;
      align-items: flex-start;
      padding: 12px 20px;
      height: min-content;
      cursor: pointer;

      &:hover {
        background: #f7f7f7;
      }

      h6 {
        color: #343a40;
        font: 14.4px 'Roboto', sans-serif;
        margin-bottom: 5px;
        max-width: 230px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          overflow: visible;
        }
      }

      p {
        color: #98a6ad;
        white-space: normal;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        line-height: 16px;
      }
    }

    .notification-text {
      margin-left: 10px;
    }
  }

  .profile-pic {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .username {
    display: flex;
    align-items: center;
    padding-inline: 12px;
    height: 70px;
    cursor: pointer;
    position: relative;

    h6 {
      color: ${props => props.theme.lightcolors.headerText};
      margin-right: 6px;
      font-size: 14.4px;
      font-weight: 400;
      margin-left: 6px;
    }

    .arrow-icon {
      width: 14.4px;
      transition: all 0.3s;
    }

    .arrow-icon.active {
      transform: rotate(180deg);
    }
  }

  .username.active {
    background-color: rgba(255, 255, 255, 0.03);
  }

  .menu {
    opacity: 0;
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    border-radius: 0.25rem;
    padding: 8px 0;
    width: 170px;
    height: max-content;
    top: 300px;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    top: 70px;
    right: 9%;

    h6 {
      padding: 15px 20px;
      font-weight: 600;
      color: ${props => props.theme.lightcolors.text};
      font-size: 12px;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      font-size: 14.4px;
      font-weight: 400;
    }

    li {
      width: 100%;
      padding: 7px 20px;
      cursor: pointer;
      border: 0;

      &:hover {
        background: #f7f7f7;
      }
    }

    hr {
      width: 100%;
      margin: 12px 0;
      border: 1px solid #f1f2f3;
    }

    .username-icon {
      width: 15px;
      height: 15px;
      vertical-align: middle;
      font-weight: 400;
      line-height: 1;
      margin-right: 10px;
      color: #000;
    }
  }

  .icon {
    width: 22px;
    height: 22px;
    cursor: pointer;
    color: ${props => props.theme.lightcolors.headerText};
  }
`

export default Container
