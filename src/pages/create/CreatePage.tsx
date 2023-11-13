import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useCameraAllowed } from "../../hooks/useCameraAllowed";
import { useSelector } from "react-redux";
import { selectPwaStatus } from "../../redux/pwa-slice";

export default function CreatePage() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const isPWA = useSelector(selectPwaStatus);
  useEffect(() => {
    const checkCameraStatus = async () => {
      const isAllowed = await useCameraAllowed();
      if (isAllowed) {
        const live = await getStream();
        setIsEnabled(true);
        setStream(live);
      } else {
        setIsEnabled(false);
      }
    };
    checkCameraStatus();
  }, []);

  const getStream = async (): Promise<MediaStream | null> => {
    while (true) {
      try {
        const environmentStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
        });
        if (isPWA) {
          alert("Camera Enabled, Click Close to continue");
        }

        return environmentStream;
      } catch (environmentError) {
        try {
          const userStream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "user",
            },
          });
          if (isPWA) {
            alert("Camera Enabled, Click Close to continue");
          }
          return userStream;
        } catch (userError) {}
      }
    }
  };

  const enableCamera = async () => {
    const live = await getStream();
    if (live) {
      setIsEnabled(true);
    }
    setStream(live);
  };

  useEffect(() => {
    if (stream) {
      if (videoElement.current) {
        videoElement.current.srcObject = stream;
      }
    }
  }, [stream]);

  return (
    <Wrapper>
      <VideoWrapper>
        <Video ref={videoElement} autoPlay playsInline muted />
      </VideoWrapper>
      <UI_Wrapper>{!isEnabled && <CenteredText onClick={enableCamera}>Tap to enable camera</CenteredText>}</UI_Wrapper>
    </Wrapper>
  );
}

const Video = styled.video`
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const CenteredText = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: white;
  font-family: "Bebas Neue";
`;
