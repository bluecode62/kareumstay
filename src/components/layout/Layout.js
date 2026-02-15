import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Inner = styled.div`
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px 0;
  align-items: flex-start;
`;