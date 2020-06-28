import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 260px;
  height: 134px;
  margin-top: -1em;
  margin-left: -11em;
  background: rgba(216, 191, 189, 0.44);
`;

export const GrayBackground = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 3em 0 -2em 4em;
  background: rgba(158, 158, 158, 0.45);
`;

export const Container = styled.section`
  display: flex;
  margin: 2em 1em 0 1em;
  flex-direction: column;
  place-content: center;
  padding: 15px;
  border: solid 1px #D8BFBD;
  margin-bottom: 3em;

  h3 {
    text-align: center;
  }

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
    margin: 3em 0 1em 0;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-end;

  div {
    justify-content: center;
    align-items: flex-end;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 2em 0 0 2em;

    a {
      text-decoration: none;
      color: #8D8D8D;
      margin-right: 1em;
    }

    p {
      margin-right: 1em;
    }
  }

  @media(min-width: 768px) {
    margin-right: 3em;
  }
`;

export const ContactImageContainer = styled.div`

  max-width: 600px;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.8;

    margin-left: 6em;
  }

  @media(max-width: 768px) {
    display: none;
  }
`;
