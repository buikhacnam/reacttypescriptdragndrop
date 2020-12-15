import React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
    id: string;
    className: string;
}

const Board: React.FC<Props> = ({children, className, id}) => {

    const drop = (e: any) => {
        e.preventDefault();
        const card_id =  e.dataTransfer.getData('card_id');
        const card:any = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
    }

    const dragOver = (e:any) => {
        e.preventDefault();
    }

    return(
        <BoardWrapper
            id ={id}
            className={className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {children}
        </BoardWrapper>
    )
}

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #181717;
    padding: 35px;
    border-radius: 5px;
    &:hover {
        transform: translateY(-5px);
    }
    transition: .4s;
   
`
export default Board;