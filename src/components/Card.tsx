import React from 'react';
import styled from 'styled-components';
interface Props {
    id: string;
    className: string;
    draggable: "true";
    children: any;
}

const Card: React.FC<Props> = ({children, id, className, draggable}) => {

    const dragStart = (e: any) => {
        const target = e.target;
        e.dataTransfer.setData("card_id", target.id);
        // setTimeout(() => {
        //     target.style.display = 'none';
        // }, 0);
    }

    const dragOver = (e: any) => {
        e.stopPropagation();
    }
    return (
        <CardWrapper
            id={id}
            className={className}
            draggable={draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
           {children}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
  padding: 15px 25px;
  //background-color: #070707;
  cursor: pointer;
  margin-bottom: 30px;
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 5px;
  &:hover {
      color: black;
  }
  
`

export default Card;