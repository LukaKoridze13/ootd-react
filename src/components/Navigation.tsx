import styled from "styled-components";
import { HiOutlineHome, HiLightningBolt, HiOutlineLightningBolt, HiOutlinePlusCircle, HiOutlineHeart, HiOutlineUserCircle, HiHome, HiPlusCircle, HiHeart, HiUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import { T_PageName, selectActivePage, setPage } from "../redux/page-slice";
import { useAppDispatch } from "../redux/store";

export default function Navigation() {
  const page = useSelector(selectActivePage);
  const ispwa = window.matchMedia("(display-mode: standalone)").matches;
  return (
    <Wrapper ispwa={ispwa ? 1 : 0}>
      <Icon page={page} value="home" active={<HiHome color="black" />} passive={<HiOutlineHome color="black" />} />
      <Icon page={page} value="top-posts" active={<HiLightningBolt color="black" />} passive={<HiOutlineLightningBolt color="black" />} />
      <Icon page={page} value="create" active={<HiPlusCircle color="black" />} passive={<HiOutlinePlusCircle color="black" />} />
      <Icon page={page} value="top-looks" active={<HiHeart color="black" />} passive={<HiOutlineHeart color="black" />} />
      <Icon page={page} value="profile" active={<HiUserCircle color="black" />} passive={<HiOutlineUserCircle color="black" />} />
    </Wrapper>
  );
}

interface IconProps {
  page: T_PageName;
  value: T_PageName;
  active: JSX.Element;
  passive: JSX.Element;
}
const Icon = ({ page, value, active, passive }: IconProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setPage(value));
  };
  return <IconWrapper onClick={handleClick}>{page === value ? active : passive}</IconWrapper>;
};

interface WrapperProps {
  ispwa: number;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  height: ${({ ispwa }) => (ispwa ? "81px" : "51px")};
  background-color: white;
  position: fixed;
  z-index: 1000;
  bottom: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-bottom: ${({ ispwa }) => (ispwa ? "31px" : "1px")};
  box-shadow: 0 -1px 0 0 #eaeaea;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;
