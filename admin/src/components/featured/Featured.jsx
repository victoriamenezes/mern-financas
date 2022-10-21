import React from 'react';
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import useFetch from '../../hooks/useFetch';

const Featured = () => {

  const { data, loading } = useFetch()
  // add error

  return (
    <div className="featured">
      {loading ? (
        "Carregando. Por favor, aguarde."
      ) : (
        <>
      <div className="top">
        <h1 className="title">Rendimento total</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total de transações hoje</p>
        <p className="amount">R$ {data[0]} 7.500,00</p>
        <p className="desc">
          Processando transacões anteriores. Os últimos pagamentos podem não estar incluídos.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">R$8.200,00</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Última semana</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">R$12.400,00</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Último mês</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">R$22.908,00</div>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Featured;
