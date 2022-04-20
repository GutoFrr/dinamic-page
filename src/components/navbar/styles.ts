import styled from 'styled-components'

const Container = styled.div`
  height: 55px;
  background: white;
  padding-inline: 120px;

  .navbar {
    display: flex;
    justify-content: flex-start;
    column-gap: 15px;
  }

  .menu-items {
    list-style: none;
    padding: 16.5px 17.6px;

    :first-child {
      padding: 16.5px 17.6px 16.5px 0;
    }
  }
`

export default Container
