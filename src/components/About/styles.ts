import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin: 4em 1em 0 1em;
  flex-direction: column;
  width: XYpx;
  height: XYpx;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
      padding-bottom: 3em;
      font-weight: 700;
    }
  }

  p {
    text-align: justify;
  }

  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin: 0;
    margin-top: 4em;

    p {
      text-align: justify;
      padding-right: 6em;
      padding-left: 6em;
    }
  }
`;

export const ImageContainer = styled.div`

  display: flex;

  img {
    height: 100%;
    width: 100%;
    margin-top: 1em;
  }

  @media(min-width: 768px) {
    max-width: 1700px;

    img {
      max-width: 475px;
      max-height: 535px;
      width: auto;
      height: auto;
    }
  }
`;
