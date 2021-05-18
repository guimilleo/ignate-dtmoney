import {GlobalStyle} from './styles/global'
import { Header } from './components/Header'
import Modal from 'react-modal'
import { useState } from 'react'

import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')


// esse export funciona melhor para imports da IDE
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </>
  );
}

// neste caso você está exportando uma variável 
// e o arquivo que está a importando pode nomeá-la como quiser
export default App;
