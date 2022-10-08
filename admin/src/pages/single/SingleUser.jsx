import React from 'react'
import "./single.scss";
import AdminDrawer from '../../../components/adminDrawer/AdminDrawer';
import AdminNavbar from '../../../components/adminDrawer/adminNavbar/AdminNavbar';
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
import List from '../../../../../client/financas/src/components/table/Table';

const SingleUser = () => {
  return (
    <div className="single">
      <AdminDrawer />
      <div className="singleContainer">
        <AdminNavbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informação</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Nome Sobrenome</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">email@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefone</span>
                  <span className="itemValue">+55</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Conta:</span>
                  <span className="itemValue">
                    768920-34
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        <div className="bottom">
        <h1 className="title">Últimas transações</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
