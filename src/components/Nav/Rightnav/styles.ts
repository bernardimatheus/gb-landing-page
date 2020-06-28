import styled from 'styled-components';

interface UlProps {
  open: boolean
}

export const Container = styled.div`

`;

export const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  opacity: 0.95;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    font-weight: 500;
  }
  z-index: 1;

  a {
    text-decoration: none;
    color: #8D8D8D;

  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #D8BFBD;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
