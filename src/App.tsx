import styled from "styled-components";
import PageDetector from "./components/PageDetector";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

export default function App() {
  return (
    <WebsiteWrapper>
      <Header />
      <PageDetector />;
      <Navigation />
    </WebsiteWrapper>
  );
}

const WebsiteWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: relative;
  overflow: hidden;
  background-color: black;
`;
