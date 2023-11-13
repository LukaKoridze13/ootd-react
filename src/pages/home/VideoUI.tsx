import styled from "styled-components";
import video from "../../assets/videos/audi.mp4";
import { useSelector } from "react-redux";
import { selectPwaStatus } from "../../redux/pwa-slice";
import { HiPhoneOutgoing, HiLink, HiDownload } from "react-icons/hi";
export default function VideoUI() {
  const isPWA = useSelector(selectPwaStatus);
  return (
    <Wrapper>
      <VideoWrapper>
        <Video playsInline muted loop autoPlay src={video} />
      </VideoWrapper>
      <UI_Wrapper>
        <ButtonsWrapper isPWA={isPWA}>
          <HiPhoneOutgoing />
          <HiLink />
          <HiDownload />
        </ButtonsWrapper>
        <LookName isPWA={isPWA}>Flora Flow</LookName>
        <LookRank isPWA={isPWA}>
          <Span>Look Rank:</Span>
          <Span> 4</Span>
        </LookRank>
        <PostRank isPWA={isPWA}>
          <Span>Post Rank:</Span>
          <Span> 4</Span>
        </PostRank>
      </UI_Wrapper>
    </Wrapper>
  );
}

const ButtonsWrapper = styled.div<{ isPWA: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 30px;

  position: absolute;
  right: 27px;
  bottom: ${(props) => (props.isPWA ? "66px" : "36px")};

  font-size: 24px;
`;

const LookRank = styled.p<{ isPWA: boolean }>`
  position: absolute;
  bottom: ${({ isPWA }) => (isPWA ? "82px" : "52px")};
  width: 100vw;
  font-size: 12px;
  color: white;
  text-align: center;
  white-space: nowrap;
  font-weight: 400;
`;

const Span = styled.span`
  &:first-child {
    opacity: 0.5;
  }
  &:last-child {
    font-weight: 900;
    font-style: italic;
    opacity: 1;
    margin-left: 2px;
  }
`;

const PostRank = styled.p<{ isPWA: boolean }>`
  position: absolute;
  bottom: ${({ isPWA }) => (isPWA ? "66px" : "36px")};
  width: 100vw;
  font-size: 12px;
  color: white;
  text-align: center;
  white-space: nowrap;
  font-weight: 400;
`;

const LookName = styled.p<{ isPWA: boolean }>`
  position: absolute;
  bottom: ${({ isPWA }) => (isPWA ? "111px" : "81px")};
  left: 0;
  width: 100vw;
  font-size: 24px;
  font-family: "Bebas Neue";
  color: white;
  text-align: center;
  white-space: nowrap;
`;

const UI_Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 20;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;
`;

const Video = styled.video`
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
