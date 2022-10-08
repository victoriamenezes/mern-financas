import React from 'react'
// import "./adminHome.scss"
import AdminDrawer from '../../../components/adminDrawer/AdminDrawer';
import AdminNavbar from '../../../components/adminDrawer/adminNavbar/AdminNavbar';
// import DashDrawer from '../../../components/common/dashDrawer';
import Widget from '../../../../../client/financas/src/components/widget/Widget';
import Featured from '../../../../../client/financas/src/components/featured/Featured';
import Table from '../../../../../client/financas/src/components/table/Table';

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
