import React from "react";
import styled from "styled-components";
import airpods from "@/assets/autobid/airpodsMax.png";

interface IProps {
  item: {
    name: string;
    price: number;
  };

  bidder?: {
    name: string;
    price: number;
  };

  seller: {
    name: string;
    startPrice: number;
  };
}

export default function NoticeSection(props: IProps) {
  return (
    <StyledNotice>
      <img src={airpods} width={95} height={95} />
      <div className="notice">
        <div className="notice__title">{props.item.name}</div>
        <div className="notice__state">
          <div>낙찰자 {props.seller.name}</div>
          <div>낙찰가 {props.seller.startPrice}원</div>
        </div>
      </div>
    </StyledNotice>
  );
}

const StyledNotice = styled.section`
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 1rem;
  display: flex;

  img {
    border-radius: 15px;
  }

  .notice {
    width: 100%;
    margin-left: 1rem;
  }

  .notice__title {
    font-weight: bold;
    font-size: 2rem;
  }
  .notice__state {
    margin-top: 1rem;
    div {
      font-size: 1.4rem;
    }
  }
`;