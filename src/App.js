import { message } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import ErrorPage from './routes/ErrorPage';
import { Home } from './routes/Home';
import Login from './routes/Login/Login';
import PrivateRoute from './routes/PrivateRoute';

export const AuthContext = React.createContext();

function App() {

  const [messageApi, contextHolder] = message.useMessage();

  const info = (msg) => {
    messageApi.info(msg);
  };

  const error = (msg) => {
    messageApi.error(msg);
  }

  const success = (msg) => {
    messageApi.success(msg);
  }

  const errors = {
    info, error, success
  }

  return (
    <AuthContext.Provider value={[errors]}>

      <BrowserRouter>

        {contextHolder}

        <Routes>

          <Route path="/" element={<PrivateRoute />} errorElement={<ErrorPage />}>
            <Route path="/" element={<Main><Home /></Main>} />
            <Route path='/finances' element={<Main><h1>Finanças</h1></Main>} />
          </Route>
          <Route path="/login" element={<Login />} />

        </Routes>

      </BrowserRouter>

    </AuthContext.Provider>

  );
}

export default App;
