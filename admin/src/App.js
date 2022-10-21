import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import AdminHome from './pages/adminHome/AdminHome';
import Login from './pages/login/Login';
import List from './components/table/Table';
import SingleItem from './pages/singleItem/SingleItem';
import NewItem from './pages/newItem/NewItem';
import { userInputs, transactionInputs } from './formSource';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AdminHome />} exact />
            {/* <Route path="/login" element={<Login />} exact /> */}


              <Route path="/users">
                <Route index element={<List />} exact />
                <Route path=":userId" element={<SingleItem />}/>
                <Route
                  path="new"
                  element={<NewItem inputs={userInputs} tittle= "Adicionar novo usuário." />}
                />
            </Route>

            <Route path="/transactions">
                <Route index element={<List />} exact />
                <Route path=":transactionId" element={<SingleItem />}/>
                <Route
                  path="new"
                  element={<NewItem inputs={transactionInputs} tittle= "Realizar nova transação." />}
                />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );}

export default App;
