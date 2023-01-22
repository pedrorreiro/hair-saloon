import { ConfigProvider, message } from 'antd';
import 'moment/locale/pt-br';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Agendamento from './routes/Agendamento/Agendamento';
import Employees from './routes/Employees/Employees';
import ErrorPage from './routes/ErrorPage';
import Finances from './routes/Finances/Finances';
import { Home } from './routes/Home';
import Login from './routes/Login/Login';
import { NewEmployee } from './routes/NewEmployee';
import PrivateRoute from './routes/PrivateRoute';
import Services from './routes/Services/Services';
import { colors } from './utils';

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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.hover,
        },
      }}
    >
      <AuthContext.Provider value={[errors]}>

        <BrowserRouter>

          {contextHolder}

          <Routes>

            <Route path="/" element={<PrivateRoute />} errorElement={<ErrorPage />}>
              <Route path="/" element={<Main><Home /></Main>} />
              <Route path="/services" element={<Main><Services /></Main>} />
              <Route path="/newEmployee" element={<Main><NewEmployee /></Main>} />
              <Route path="/agendamentos" element={<Main><Agendamento /></Main>} />
              <Route path="/employees" element={<Main><Employees /></Main>} />
              <Route path='/finances' element={<Main><Finances /></Main>} />
            </Route>
            <Route path="/login" element={<Login />} />

          </Routes>

        </BrowserRouter>

      </AuthContext.Provider>
    </ConfigProvider>

  );
}

export default App;
