import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <AdminNavbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List;
