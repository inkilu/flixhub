import "./feedbacks.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { deleteList} from "../../context/listContext/apiCalls";
import { deleteFeedbacks } from "../../context/feebacksContext/apiCalls";
import { FeedbacksContext } from "../../context/feebacksContext/FeedbacksContext";
import { getFeebacks } from "../../context/feebacksContext/apiCalls";

export default function ListList() {
  const { feedbacks, dispatch } = useContext(FeedbacksContext);

  useEffect(() => {
    getFeebacks(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteFeedbacks(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "year", headerName: "year", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link
              to={{ pathname: "/list/" + params.row._id, list: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={feedbacks}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
