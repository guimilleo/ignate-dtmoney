import {GlobalStyle} from './styles/global'
import { Header } from './components/Header'
// esse export funciona melhor para imports da IDE
export function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
    </>
  );
}

// neste caso você está exportando uma variável 
// e o arquivo que está a importando pode nomeá-la como quiser
export default App;
