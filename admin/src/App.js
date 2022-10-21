import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import AdminHome from './pages/adminHome/AdminHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/register" element={<SignupPage />} exact /> */}
          </Route>

          {/* <Route path="/user">
            <Route index element={<UserHome />} exact />
          </Route> */}


          <Route path="/admin">
            <Route index element={<AdminHome />} exact />
          </Route>


          {/* <Route path="usuarios">
            <Route index element={<List />} exact />
            <Route path=":usuarioId" element={<SingleUser />} />
            <Route path="new" element={<NewPage />} />
          </Route>
          <Route path="funcionarios">
            <Route index element={<List />} exact />
            <Route path="funcionario:Id" element={<SingleUser />} />
            <Route path="new" element={<NewPage />} />
          </Route> */}



          {/* <Route path="admin-dashboard" element={<AdminDashboard />} exact >

            <Route path="database" element={<AdminDatabase />} />
            <Route path="usuarios" element={<AdminUsuarios />} exact />
            <Route path="financeiro" element={<AdminFinanceiro/>} exact />
            <Route path="funcionarios" element={<AdminFuncionarios />} exact />
            <Route path="parceiros" element={<AdminParceiros />} exact />
            <Route path="servicos" element={<AdminServicos />} exact />
          </Route> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
