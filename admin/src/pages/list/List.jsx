import React from "react";
import "./list.scss";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import Datatable from "../../components/datatable/Datatable";
import AdminDrawer from '../../components/adminDrawer/AdminDrawer';

const List = ({columns}) => {
  return (
    <div className="list">
      <AdminDrawer/>
      <div className="listContainer">
        <AdminNavbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List;
