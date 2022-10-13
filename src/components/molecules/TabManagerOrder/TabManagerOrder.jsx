import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";
import { Avatar } from "@mui/material";

// import icons and images
import manIcon from "../../../assets/icons/manIcon.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import greenIcon from "../../../assets/icons/greenDotIcon.png";
import greyIcon from "../../../assets/icons/greyDotIcon.png";
import redIcon from "../../../assets/icons/redDotIcon.png";
import downArrowIcon from "../../../assets/icons/downArrowIcon.png";
import settingsIcon from "../../../assets/icons/settingsIcon.png";
import trashCanIcon from "../../../assets/icons/trashCanIcon.png";
import infoIcon from "../../../assets/icons/infoIcon.png";

// dummy data
const DataOrder = [
  {
    id: 1,
    userImg: manIcon,
    userName: "Brooklyn Zoe",
    userAddress: "302 Snider Street, RUTLAND, VT, 05701",
    orderDate: {
      date: 31,
      month: "Jul",
      year: 2022,
    },
    totalPrice: 64.0,
    orderStatus: "Pending",
  },
  {
    id: 2,
    userImg: manIcon,
    userName: "John McCormick",
    userAddress: "1096 Wiseman Street, CALMAR, IA, 52132",
    orderDate: {
      date: 1,
      month: "Aug",
      year: 2022,
    },
    totalPrice: 35.0,
    orderStatus: "Dispatch",
  },
  {
    id: 3,
    userImg: manIcon,
    userName: "Sandra Pugh",
    userAddress: "1640 Thorn Street, SALE CITY, GA, 98106",
    orderDate: {
      date: 2,
      month: "Aug",
      year: 2022,
    },
    totalPrice: 74.0,
    orderStatus: "Completed",
  },
  {
    id: 4,
    userImg: manIcon,
    userName: "Vernie Hart",
    userAddress: "3989 Oak Drive, DOVER, RE, 19906",
    orderDate: {
      date: 2,
      month: "Aug",
      year: 2022,
    },
    totalPrice: 82.0,
    orderStatus: "Pending",
  },
  {
    id: 5,
    userImg: manIcon,
    userName: "Mark Clark",
    userAddress: "1915 Augusta Park, NASSAU, NY, 12062",
    orderDate: {
      date: 3,
      month: "Aug",
      year: 2022,
    },
    totalPrice: 39.0,
    orderStatus: "Dispatch",
  },
  {
    id: 6,
    userImg: manIcon,
    userName: "Rebekah Foster",
    userAddress: "3445 Park Boulevard, BIOLA, CA, 93606",
    orderDate: {
      date: 3,
      month: "Aug",
      year: 2022,
    },
    totalPrice: 67.0,
    orderStatus: "Pending",
  },
];

// function render Status checker
const StatusCheckerRender = (props) => {
  if (props === "Dispatch") {
    return (
      <div className="containerDispatchStatus">
        <img src={greenIcon} alt="Dispatch Status" />
        <p>{props}</p>
      </div>
    );
  }
  if (props === "Completed") {
    return (
      <div className="containerCompletedStatus">
        <img src={greyIcon} alt="Completed Status" />
        <p>{props}</p>
      </div>
    );
  } else {
    return (
      <div className="containerPendingStatus">
        <img src={redIcon} alt="Pending Status" />
        <p>{props}</p>
      </div>
    );
  }
};

const ActionRender = ({ props }) => {
  return (
    <div className="containerBtnActionDataGrid">
      <button>
        <img src={infoIcon} alt="Setting Icon" />
      </button>
      <button>
        <img src={trashCanIcon} alt="Down Arrow" />
      </button>
    </div>
  );
};

// function render All order table
const AllOrderStatus = (props) => {
  const columns = [
    {
      field: "id",
      type: "number",
      headerClassName: "__headerDataGrid",
      headerName: "ID",
      valueFormatter: ({ value }) => `#${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Id</p>
        </strong>
      ),
      flex: 1,
      // width: 150,
    },
    {
      field: "userImg",
      headerName: "Avatar",
      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Avatar</p>
        </strong>
      ),
      renderCell: (params) => (
        <img
          style={{
            width: 40,
            height: 40,
            alignSelf: "center",
          }}
          src={params.row.userImg}
          alt="Avatar"
        />
      ),
      sortAble: false,
      editable: false,
      filterable: false,
      flex: 1.2,
    },
    {
      field: "userName",
      type: "string",
      headerName: "Name",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Name</p>
        </strong>
      ),
      flex: 2,
      sortAble: true,
      editable: true,
      // width: 250,
    },
    {
      field: "userAddress",
      type: "string",
      headerName: "Address",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Address</p>
        </strong>
      ),
      flex: 4,
      editable: true,
      // width: 350,
    },
    {
      field: "orderDate",
      headerName: "Date",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) =>
        `${value.date} ${value.month} ${value.year}`,
      renderHeader: (params) => (
        <strong>
          <p>Date</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 180,
    },
    {
      field: "totalPrice",
      headerName: "Price",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => `$${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Price</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 100,
    },
    {
      field: "orderStatus",
      headerName: "Status",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => {
        if (value === "Pending") {
          return `${value}`;
        }
        if (value === "Completed") {
          return `${value}`;
        } else {
          return `${value}`;
        }
      },
      flex: 2,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Completed", "Pending", "Dispatch"],
      renderHeader: (params) => (
        <strong>
          <p>Status</p>
        </strong>
      ),
      renderCell: (params) => {
        return StatusCheckerRender(params.row.orderStatus);
      },

      // width: 200,
    },
    {
      field: "orderDate.date",
      sortAble: false,
      editable: false,
      filterable: false,
      headerClassName: "__headerDataGrid",
      flex: 1.5,
      renderHeader: (params) => (
        <strong>
          <p>Action</p>
        </strong>
      ),
      renderCell: (params) => {
        return ActionRender(params.row);
      },
    },
  ];
  const rows = props;
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        disableColumnMenu={false}
        headerHeight={80}
        hideFooter={false}
        rowHeight={80}
        sx={{
          width: "100%",
          height: 650,
        }}
        checkboxSelection={false}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 5 : 0,
        })}
      ></DataGrid>
    </Box>
  );
};

// function render Dispatch orderStatus table
const DispatchStatus = (props) => {
  const columns = [
    {
      field: "id",
      type: "number",
      headerClassName: "__headerDataGrid",
      headerName: "ID",
      valueFormatter: ({ value }) => `#${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Id</p>
        </strong>
      ),
      flex: 1,
      // width: 150,
    },
    {
      field: "userImg",
      headerName: "Avatar",
      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Avatar</p>
        </strong>
      ),
      renderCell: (params) => (
        <img
          style={{
            width: 40,
            height: 40,
            alignSelf: "center",
          }}
          src={params.row.userImg}
          alt="Avatar"
        />
      ),
      sortAble: false,
      editable: false,
      filterable: false,
      flex: 0.8,
    },
    {
      field: "userName",
      type: "string",
      headerName: "Name",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Name</p>
        </strong>
      ),
      flex: 2,
      sortAble: true,
      editable: true,
      // width: 250,
    },
    {
      field: "userAddress",
      type: "string",
      headerName: "Address",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Address</p>
        </strong>
      ),
      flex: 4,
      editable: true,
      // width: 350,
    },
    {
      field: "orderDate",
      headerName: "Date",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) =>
        `${value.date} ${value.month} ${value.year}`,
      renderHeader: (params) => (
        <strong>
          <p>Date</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 180,
    },
    {
      field: "totalPrice",
      headerName: "Price",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => `$${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Price</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 100,
    },
    {
      field: "orderStatus",
      headerName: "Status",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => {
        if (value === "Pending") {
          return `${value}`;
        }
        if (value === "Completed") {
          return `${value}`;
        } else {
          return `${value}`;
        }
      },
      flex: 2,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Completed", "Pending", "Dispatch"],
      renderHeader: (params) => (
        <strong>
          <p>Status</p>
        </strong>
      ),
      renderCell: (params) => {
        return StatusCheckerRender(params.row.orderStatus);
      },

      // width: 200,
    },
    {
      field: "orderDate.date",
      sortAble: false,
      editable: false,
      filterable: false,
      headerClassName: "__headerDataGrid",
      flex: 1.5,
      renderHeader: (params) => (
        <strong>
          <p>Action</p>
        </strong>
      ),
      renderCell: (params) => {
        return ActionRender(params.row);
      },
    },
  ];
  let row = [];
  for (let dataUser of props) {
    if (dataUser.orderStatus === "Dispatch") {
      row.push(dataUser);
    }
  }
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={7}
        disableColumnMenu={false}
        headerHeight={80}
        rowHeight={80}
        hideFooter={false}
        sx={{
          width: "100%",
          height: 645,
        }}
        checkboxSelection={false}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 5 : 0,
        })}
      ></DataGrid>
    </Box>
  );
};

// function render Pending orderStatus table
const PendingStatus = (props) => {
  const columns = [
    {
      field: "id",
      type: "number",
      headerClassName: "__headerDataGrid",
      headerName: "ID",
      valueFormatter: ({ value }) => `#${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Id</p>
        </strong>
      ),
      flex: 1,
      // width: 150,
    },
    {
      field: "userImg",
      headerName: "Avatar",
      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Avatar</p>
        </strong>
      ),
      renderCell: (params) => (
        <img
          style={{
            width: 40,
            height: 40,
            alignSelf: "center",
          }}
          src={params.row.userImg}
          alt="Avatar"
        />
      ),
      sortAble: false,
      editable: false,
      filterable: false,
      flex: 0.8,
    },
    {
      field: "userName",
      type: "string",
      headerName: "Name",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Name</p>
        </strong>
      ),
      flex: 2,
      sortAble: true,
      editable: true,
      // width: 250,
    },
    {
      field: "userAddress",
      type: "string",
      headerName: "Address",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Address</p>
        </strong>
      ),
      flex: 4,
      editable: true,
      // width: 350,
    },
    {
      field: "orderDate",
      headerName: "Date",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) =>
        `${value.date} ${value.month} ${value.year}`,
      renderHeader: (params) => (
        <strong>
          <p>Date</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 180,
    },
    {
      field: "totalPrice",
      headerName: "Price",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => `$${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Price</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 100,
    },
    {
      field: "orderStatus",
      headerName: "Status",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => {
        if (value === "Pending") {
          return `${value}`;
        }
        if (value === "Completed") {
          return `${value}`;
        } else {
          return `${value}`;
        }
      },
      flex: 2,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Completed", "Pending", "Dispatch"],
      renderHeader: (params) => (
        <strong>
          <p>Status</p>
        </strong>
      ),
      renderCell: (params) => {
        return StatusCheckerRender(params.row.orderStatus);
      },

      // width: 200,
    },
    {
      field: "orderDate.date",
      sortAble: false,
      editable: false,
      filterable: false,
      headerClassName: "__headerDataGrid",
      flex: 1.5,
      renderHeader: (params) => (
        <strong>
          <p>Action</p>
        </strong>
      ),
      renderCell: (params) => {
        return ActionRender(params.row);
      },
    },
  ];
  let row = [];
  for (let dataUser of props) {
    if (dataUser.orderStatus === "Pending") {
      row.push(dataUser);
    }
  }
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={7}
        disableColumnMenu={false}
        headerHeight={80}
        rowHeight={80}
        hideFooter={false}
        sx={{
          width: "100%",
          height: 645,
        }}
        checkboxSelection={false}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 5 : 0,
        })}
      ></DataGrid>
    </Box>
  );
};

// function render Completed orderStatus table
const CompletedStatus = (props) => {
  const columns = [
    {
      field: "id",
      type: "number",
      headerClassName: "__headerDataGrid",
      headerName: "ID",
      valueFormatter: ({ value }) => `#${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Id</p>
        </strong>
      ),
      flex: 1,
      // width: 150,
    },
    {
      field: "userImg",
      headerName: "Avatar",
      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Avatar</p>
        </strong>
      ),
      renderCell: (params) => (
        <img
          style={{
            width: 40,
            height: 40,
            alignSelf: "center",
          }}
          src={params.row.userImg}
          alt="Avatar"
        />
      ),
      sortAble: false,
      editable: false,
      filterable: false,
      flex: 0.8,
    },
    {
      field: "userName",
      type: "string",
      headerName: "Name",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Name</p>
        </strong>
      ),
      flex: 2,
      sortAble: true,
      editable: true,
      // width: 250,
    },
    {
      field: "userAddress",
      type: "string",
      headerName: "Address",

      headerClassName: "__headerDataGrid",
      renderHeader: (params) => (
        <strong>
          <p>Address</p>
        </strong>
      ),
      flex: 4,
      editable: true,
      // width: 350,
    },
    {
      field: "orderDate",
      headerName: "Date",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) =>
        `${value.date} ${value.month} ${value.year}`,
      renderHeader: (params) => (
        <strong>
          <p>Date</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 180,
    },
    {
      field: "totalPrice",
      headerName: "Price",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => `$${value}`,
      renderHeader: (params) => (
        <strong>
          <p>Price</p>
        </strong>
      ),
      flex: 1.5,
      editable: true,
      // width: 100,
    },
    {
      field: "orderStatus",
      headerName: "Status",
      headerClassName: "__headerDataGrid",
      valueFormatter: ({ value }) => {
        if (value === "Pending") {
          return `${value}`;
        }
        if (value === "Completed") {
          return `${value}`;
        } else {
          return `${value}`;
        }
      },
      flex: 2,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Completed", "Pending", "Dispatch"],
      renderHeader: (params) => (
        <strong>
          <p>Status</p>
        </strong>
      ),
      renderCell: (params) => {
        return StatusCheckerRender(params.row.orderStatus);
      },

      // width: 200,
    },
    {
      field: "orderDate.date",
      sortAble: false,
      editable: false,
      filterable: false,
      headerClassName: "__headerDataGrid",
      flex: 1.5,
      renderHeader: (params) => (
        <strong>
          <p>Action</p>
        </strong>
      ),
      renderCell: (params) => {
        return ActionRender(params.row);
      },
    },
  ];
  let row = [];
  for (let dataUser of props) {
    if (dataUser.orderStatus === "Completed") {
      row.push(dataUser);
    }
  }
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={7}
        disableColumnMenu={false}
        headerHeight={80}
        rowHeight={80}
        hideFooter={false}
        sx={{
          width: "100%",
          height: 645,
        }}
        checkboxSelection={false}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 5 : 0,
        })}
      ></DataGrid>
    </Box>
  );
};

const TabManagerOrder = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "inherit", height: "inherit", padding: "5%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{
              sx: { backgroundColor: "#2A254B", height: 2 },
            }}
            sx={{
              "& button": {
                fontSize: 12,
                fontFamily: "Satoshi",
                fontWeight: 600,
              },
              "& button:active": { color: "#2A254B" },
            }}
            aria-label="lab API tabs example"
          >
            <Tab label="All orders" value="1" />
            <Tab label="Dispatch" value="2" />
            <Tab label="Pending" value="3" />
            <Tab label="Completed" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1" children={AllOrderStatus(DataOrder)}></TabPanel>
        <TabPanel value="2" children={DispatchStatus(DataOrder)}></TabPanel>
        <TabPanel value="3" children={PendingStatus(DataOrder)}></TabPanel>
        <TabPanel value="4" children={CompletedStatus(DataOrder)}></TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabManagerOrder;
