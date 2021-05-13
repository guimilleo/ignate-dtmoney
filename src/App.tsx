import {GlobalStyle} from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';

// esse export funciona melhor para imports da IDE
export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

// neste caso você está exportando uma variável 
// e o arquivo que está a importando pode nomeá-la como quiser
export default App;
