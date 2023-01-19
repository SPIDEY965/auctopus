import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import styled from "styled-components";
import { ReactComponent as Turtle } from "../../assets/badges/turtle.svg";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  title?: string;
  rightComponent?: JSX.Element;
}

/**
 * 헤더
 *
 * @param props.title 제목
 * @param props.rightComponent 오른쪽 코너 컴포넌트
 * @returns Header component
 */
export default function Header(props: IProps): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname; // || "/"
  return (
    <StyledHeader>
      {from ? (
        <ChevronLeftOutlinedIcon
          className="h-6 w-6 "
          onClick={() => navigate(-1)}
        />
      ) : (
        <Turtle width="5rem" height="4rem" />
      )}
      <h1 className="title">{props.title}</h1>
      <div className="iconContainer">
        {/* FIXME: be moved to main page */}
        <NotificationsNoneOutlinedIcon className="icon" />
        <SearchOutlinedIcon className="icon" />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  background-color: transparent;

  .title {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.primary};
  }

  .iconContainer {
    display: flex;
    align-items: center;
    /* color:  */
    /* margin: 0 1rem; */

    .icon {
      color: ${(props) => props.theme.colors.primary};
      margin: 0 0.5rem;
      width: 2rem;
    }
  }
`;
