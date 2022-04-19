import styled from 'styled-components'

const Container = styled.div`
  .settings-icon {
    cursor: pointer;
    width: 22px;
    height: 22px;
    color: ${props => props.theme.lightcolors.headerText};
  }

  .blabla {
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

    .settings-btns {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-weight: 800;
      color: #515165;
      line-height: 15px;
      text-transform: uppercase;
    }

    .settings-btns > div {
      width: 20vw;
      padding: 15px 0 15px 35px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .settings-btns > div:hover {
      background: transparent;
      box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.3);
      padding-left: 50px;
    }

    &.inactive {
      right: -20vw;
      top: 0;
    }
  }
`

export default Container
