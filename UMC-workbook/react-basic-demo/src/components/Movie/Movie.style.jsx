import styled from 'styled-components';

export const MovieContainer = styled.div`
  position: relative;
  width: 250px;
  border-radius: 5px;
  color: aliceblue;
  margin: 10px;
  justify-content: center;
  background-color: rgb(79, 79, 121);
`;

export const MovieImg = styled.img`
  max-width: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitle = styled.h4`
  margin: 0;
`;

export const MovieRating = styled.span`
  margin: 3px;
`;

export const MovieDescription = styled.p`
  color: white;
`;

export const Overview = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(2, 1, 0, 0.8);
`;
