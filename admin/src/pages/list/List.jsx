import React from 'react'
import "./list.scss"
import AdminNavbar from '../../../components/adminDrawer/adminNavbar/AdminNavbar';
// import Datatable from "../../components/datatable/Datatable"
import AdminDrawer from '../../../components/adminDrawer/AdminDrawer';
import Datatable from '../../../../../client/financas/src/components/datatable/Datatable';

const List = () => {
  return (
    <div className="list">
      <AdminDrawer/>
      <div className="listContainer">
        <AdminNavbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List
