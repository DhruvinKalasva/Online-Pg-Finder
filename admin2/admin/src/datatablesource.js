export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "phone",
    headerName: "Phone No.",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

];

export const pgColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "pgname",
    headerName: "Pg Name",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "ownername",
    headerName: "Ownername",
    width: 100,
  },
  {
    field: "area",
    headerName: "Area",
    width: 100,
  },
];


