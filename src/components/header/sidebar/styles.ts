import styled from 'styled-components'

const Container = styled.div`
  .settings-icon {
    cursor: pointer;
    width: 22px;
    height: 22px;
    color: ${props => props.theme.lightcolors.headerText};
  }

  .close-icon {
    background: #242424;
    border-radius: 50%;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #454545;
    }
  }

  .settings-icon-close {
    cursor: pointer;
    color: #fff;
  }

  .sidebar-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68.59px;
    padding: 35px 25px;
    background: #71b6f9;
    font: 600 16px 'Karla', sans-serif;

    h4 {
      color: #fff;
      margin-right: auto;
    }
  }

  .settings.active {
    right: 0vw;
    top: 0vh;
    z-index: 1;
  }

  .settings {
    height: 100vh;
    width: 15vw;
    background: #fff;
    position: fixed;
    opacity: 1;
    transition: all 0.3s;
    overflow: hidden scroll;

    &.inactive {
      right: -20vw;
      top: 0;
    }
  }

  .sidebar-settings {
    padding: 24px;
  }

  .settings-description {
    color: #edbe4d;
    font: 400 14.4px 'Roboto', sans-serif;
    background-color: rgba(249, 200, 81, 0.18);
    border-color: rgba(249, 200, 81, 0.25);
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid #edbe4d;
    border-radius: 0.25rem;
  }

  .settings-btns {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .toggle-container {
    margin: 30px 0 8px;

    h6 {
      font-weight: 500;
      font-size: 14px;
      font-family: 'Karla', sans-serif;
      color: #343a40;
      padding-bottom: 6px;
      line-height: 1.1;
    }

    h5 {
      font: 500 14.4px 'Roboto', sans-serif;
      display: inline-block;
      color: #6c757d;
    }

    .toggle-on {
      color: #71b6f9;
      font-size: 34px;
      margin-right: 4px;
      vertical-align: middle;

      :active {
      }
    }

    .toggle-off {
      color: ${props => props.theme.lightcolors.descriptionText};
      font-size: 34px;
      margin-right: 4px;
      vertical-align: middle;
    }
  }

  .bottom-btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    row-gap: 24px;
  }

  .blue-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #71b6f9;
    border: 1px solid #71b6f9;
    border-radius: 0.15rem;
    width: 212px;
    height: 38px;
    font: 400 14.4px 'Roboto', sans-serif;
    color: white;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #409df7;
      border-color: #2890f6;
    }

    &:active {
      background-color: #2890f6;
      border-color: #0977e2;
      box-shadow: 0 0 0 0.15rem rgb(134 193 250 / 50%);
    }
  }

  .red-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff5b5b;
    border: 1px solid #ff5b5b;
    border-radius: 0.15rem;
    width: 212px;
    height: 38px;
    color: white;
    font: 400 14.4px 'Roboto', sans-serif;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #ff2828;
      border-color: #ff0f0f;
    }

    &:active {
      background-color: #ff0f0f;
      border-color: #db0000;
      box-shadow: 0 0 0 0.15rem rgba(255 91 91 / 50%);
    }

    p {
      margin-left: 8px;
    }
  }
`

export default Container
