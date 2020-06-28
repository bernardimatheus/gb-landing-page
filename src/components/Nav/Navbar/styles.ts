import styled from 'styled-components';

export const Nav = styled.section`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0 2em 0;
  position: sticky;
  padding: 8px 0 8px 0;
  top: 0;
  z-index: 100; /* this is optional and should be different for every project */

  .logo {
    display: flex;
    place-content: center;
    margin: 0 10px 0 10px;
  }
`;
