import React from 'react';
import Card from './components/Card';
import Board from './components/Board';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <Container>
    <Wrapper>
        <Board id='board-2' className='board'>
          <Card id='card-2' className='red' draggable='true'>
              <p>Lift me</p>
          </Card>

          <Card id='card-3' className='blue' draggable='true'>
              <p>drag me</p>
          </Card>

          <Card id='card-4' className='yellow' draggable='true'>
              <p>pick me</p>
          </Card>

          <Card id='card-5' className='purple' draggable='true'>
              <p>grab me</p>
          </Card>

          <Card id='card-6' className='blue2' draggable='true'>
              <p>take me</p>
          </Card>
        </Board>

        <Board id='board-1' className='board'>
          <Card id='card-1' className='pink' draggable='true'>
              <p>pull me</p>
          </Card>
        </Board>

        <Board id='board-3' className='board'>
          <Card id='card-7' className='orange' draggable='true'>
              <p>choose me</p>
          </Card>
          <Card id='card-8' className='green' draggable='true'>
              <p>select me</p>
          </Card>
        </Board>
  </Wrapper>
  </Container>
  );
}

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 50px;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  padding: 15px;
  .red {
      background-color: red;
  }
  .blue {
      background-color: blue;
  }
  .pink {
      background-color: #ff8398;
  }
  .blue2 {
      background-color: #1285bb;
  }
  .orange {
      background-color: orange;
  }
  .purple {
      background-color: purple;
  }
  .green {
      background-color: green;
  }
  .yellow {
      background-color: #6d6d08;
  }

`
const Container = styled.div `
  display: grid;
  justify-content: center;
  align-items: center;
`

export default App;

