import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListaCocteles from './components/ListaCocteles';

import CategoriasProvider from './context/CategoriasContext';
import CoctelesProvider from './context/CoctelesContex';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <CoctelesProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>

            <ListaCocteles />
          </div>
        </ModalProvider>
      </CoctelesProvider>
    </CategoriasProvider>
  );
}

export default App;
