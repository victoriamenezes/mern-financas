import React from 'react'
import "./adminHome.scss"
import AdminDrawer from '../../components/adminDrawer/AdminDrawer';
import AdminNavbar from '../../components/adminNavbar/AdminNavbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';

// import DashDrawer from '../../../components/common/dashDrawer';
import Table from '../../components/table/Table';

const AdminHome = () => {
  return (
    <div className="home">
      <AdminDrawer />
      <div className="homeContainer">
        <AdminNavbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Ultimas transações</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default AdminHome
