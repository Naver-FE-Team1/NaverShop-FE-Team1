import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import notificationIcon from '../../../assets/icons/notificationIcon.png';
import manIcon from '../../../assets/icons/manIcon.png';
import downArrowIcon from '../../../assets/icons/downArrowIcon.png';
// import { TabSelector } from "./TabSelector";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// const TabNavigationBar = () => {
//     const [selectedTab, setSelectedTab] = useTabs ([
//         "All orders",
//         "Dispatch",
//         "Pending",
//         "Completed",
//     ]);

//     return (
//         <div className='tabNavigationBar'>
//             {/* <nav>
//                 <TabSelector
//                 isActive = {selectedTab === "All orders"}
//                 onClick={() => setSelectedTab("All orders")}>
//                     All orders
//                 </TabSelector>
//                 <TabSelector
//                 isActive = {selectedTab === "Dispatch"}
//                 onClick={() => setSelectedTab("Dispatch")}>
//                     Dispatch
//                 </TabSelector>
//                 <TabSelector
//                 isActive = {selectedTab === "Pending"}
//                 onClick={() => setSelectedTab("Pending")}>
//                     Pending
//                 </TabSelector>
//                 <TabSelector
//                 isActive = {selectedTab === "Completed"}
//                 onClick={() => setSelectedTab("Completed")}>
//                     Completed
//                 </TabSelector>
//             </nav> */}
//             <div className='containerTabSelector'>
//                 <TabPanel hidden={selectedTab !== 'All orders'}>Full Order</TabPanel>
//                 <TabPanel hidden={selectedTab !== 'Dispatch'}>Dispatched list</TabPanel>
//                 <TabPanel hidden={selectedTab !== 'Pending'}>Pending list orders</TabPanel>
//                 <TabPanel hidden={selectedTab !== 'Completed'}>Completed Orders</TabPanel>
//             </div>
//         </div>
//     );
// }

const TabNavigationBarMUI = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};



const ManageOrderHeader = () => {
  const [orderFounded, setOrderFounded] = useState(6);

  return (
    <div className="manageOrderHeader">
      <div className="__TextHeader">
        <h1>Orders</h1>
        <h4>{orderFounded} orders found</h4>
      </div>
      <div className="__ButtonHeader">
        <button className="__ButtonNotification"
        >
          <img src={notificationIcon} alt="Notification Icon"/>
        </button>
        <button className="__ButtonProfileSetting">
          <img src={manIcon} alt="Profile Icon"/>
        </button>
        <button className="__ButtonArrowDropDown">
          <img src={downArrowIcon} alt="More Info Icon"/>
        </button>
      </div>

    </div>
    
  );
};

export default ManageOrderHeader;
