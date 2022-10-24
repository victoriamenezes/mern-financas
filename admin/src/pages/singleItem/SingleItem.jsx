import "./singleItem.scss";
import AdminDrawer from "../../components/adminDrawer/AdminDrawer";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
// import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SingleItem = () => {
  return (
    <div className="single">
      <AdminDrawer />
      <div className="singleContainer">
        <AdminNavbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informações</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">-</h1>
                <div className="detailItem">
                  <span className="itemKey">E-mail:</span>
                  <span className="itemValue">-</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefone:</span>
                  <span className="itemValue">-</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Endereço:</span>
                  <span className="itemValue">
                    -
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">País:</span>
                  <span className="itemValue">-</span>
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

export default SingleItem;
