// import './App.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 64px;
  color: #8257E6;
`

// esse export funciona melhor para imports da IDE
export function App() {
  return (
    <div className="App">
      <Title>Hello World</Title>
    </div>
  );
}

// neste caso você está exportando uma variável 
// e o arquivo que está a importando pode nomeá-la como quiser
export default App;
