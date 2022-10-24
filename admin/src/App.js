import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import AdminHome from './pages/adminHome/AdminHome';
import Login from './pages/login/Login';
import List from './pages/list/List';
import SingleItem from './pages/singleItem/SingleItem';
import NewItem from './pages/newItem/NewItem';
import { userInputs, transactionInputs } from './formSource';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { transactionColumns, userColumns } from "./datatablesource";



function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<Login />} exact />
            <Route index element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            } exact />

              <Route path="users">
                <Route index element={
                  <ProtectedRoute>
                    <List columns={userColumns}/>
                  </ProtectedRoute>
                } exact />
                <Route path=":userId" element={
                  <ProtectedRoute>
                    <SingleItem />
                  </ProtectedRoute>
                }/>
                <Route
                  path="new"
                  element={
                    <ProtectedRoute>
                      <NewItem inputs={userInputs} tittle= "Adicionar novo usuário." />
                    </ProtectedRoute>
                }/>
            </Route>

            <Route path="/transactions">
                <Route index element={
                  <ProtectedRoute>
                    <List columns={transactionColumns}/>
                  </ProtectedRoute>
                } exact />
                <Route path=":transactionId" element={
                  <ProtectedRoute>
                    <SingleItem />
                  </ProtectedRoute>
                  }/>
                <Route
                  path="new"
                  element={
                <ProtectedRoute>
                  <NewItem inputs={transactionInputs} tittle= "Realizar nova transação." />
                </ProtectedRoute>
                }/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );}

export default App;
