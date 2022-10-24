export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Usuário",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_960_720.png" } alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "País",
    width: 100,
  },
  {
    field: "city",
    headerName: "Cidade",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Telefone",
    width: 100,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

export const transactionColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Nome do cliente",
    width: 150,
  },
  {
    field: "type",
    headerName: "Tipo de transação",
    width: 100,
  },
  {
    field: "value",
    headerName: "Valor da transação",
    width: 230,
  },
  {
    field: "countadress",
    headerName: "Endereço da conta",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Observações",
    width: 100,
  },
];
