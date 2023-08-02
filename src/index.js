import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { configureStore } from '@reduxjs/toolkit';
import launchesSliceReducer from './redux/store/launchesSlice';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer: {
      launches: launchesSliceReducer
     
  },
});


root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  
);