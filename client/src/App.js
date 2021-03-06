import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App fluid-container">
        <AppNavbar />
        <ItemModal />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
