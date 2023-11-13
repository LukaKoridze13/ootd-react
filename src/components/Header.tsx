import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectActivePage } from "../redux/page-slice";
import { useEffect, useState } from "react";

type Time_Filter = "week" | "month" | "year";
export default function Header() {
  const page = useSelector(selectActivePage);
  const [filter, setFilter] = useState<Time_Filter>("week");
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  let headerText: string = "Outfit Of The Day";

  const handleFilterChange = () => {
    switch (filter) {
      case "week":
        setFilter("month");
        break;
      case "month":
        setFilter("year");
        break;
      case "year":
        setFilter("week");
        break;
      default:
        setFilter("week");
        break;
    }
  };

  switch (page) {
    case "home":
      headerText = "Outfit Of The Day";
      break;
    case "top-posts":
      headerText = `Leaderboard`;
      break;
    case "create":
      headerText = "Outfit Of The Day";
      break;
    case "top-looks":
      headerText = `Top Looks`;
      break;
    case "profile":
      headerText = "Profile";
      break;
    default:
      break;
  }

  useEffect(() => {
    switch (page) {
      case "home":
        setFilterVisible(false);
        break;
      case "top-posts":
        setFilterVisible(true);
        break;
      case "create":
        setFilterVisible(false);
        break;
      case "top-looks":
        setFilterVisible(true);
        break;
      case "profile":
        setFilterVisible(false);
        break;
      default:
        break;
    }
  }, [page]);

  return (
    <Wrapper>
      <Title>{headerText}</Title>
      {filterVisible && <Filter onClick={handleFilterChange}>{filter}</Filter>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  background-color: white;
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-inline: 24px;
  box-shadow: 0 1px 0 0 #eaeaea;
`;

const Title = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 32px;
  font-family: "Bebas Neue";
  color: rgb(0, 0, 0);
`;

const Filter = styled.p`
  font-size: 16px;
  font-family: "Bebas Neue";
  color: black;
  opacity: 0.5;
`;
