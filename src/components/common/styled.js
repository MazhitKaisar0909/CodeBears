import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 744px) {
    max-width: 744px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
