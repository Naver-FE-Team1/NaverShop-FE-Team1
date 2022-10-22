import React, { useState } from 'react'
import "./User.scss"
import Banner from '../../organisms/Banner/Banner'
import backgroundImage from "../../../assets/user-banner.jpg"
import { Tab, Tabs, useMediaQuery } from '@mui/material'
import TabPanel from '../../molecules/TabPanel/TabPanel'
import UserInfo from '../../organisms/TabPanelDetail/UserInfo'
import OrderStatus from '../../organisms/TabPanelDetail/OrderStatus'
import ChangePassword from '../../organisms/TabPanelDetail/ChangePassword'
import Logout from '../../organisms/TabPanelDetail/Logout'

const tabsArr = [
    {
        // component: <UserInfo />,
        title: "my account",
    },
    {
        // component: <OrderStatus />,
        title: "orders status",
    },
    {
        // component: <ChangePassword />,
        title: "change password",
    },
    {
        // component: <Logout />,
        title: "logout"
    }
]

const User = () => {
    const smMatches = useMediaQuery("(min-width: 600px)")

    const [tabValue, setTabValue] = useState(0)
    const handleChangeTab = (e, newValue) => {
        setTabValue(newValue)
    }

    return (
        <div id='user-page'>
            <Banner bgImg={backgroundImage}>
                User
            </Banner>
            <section style={{
                flex: 1,
                display: "flex",
                flexDirection: smMatches ? "row" : "column",
                justifyContent: "center",
                margin: "15px 0"
            }}>
                <aside>
                    <Tabs
                        value={tabValue}
                        onChange={handleChangeTab}
                        variant='scrollable'
                        orientation={smMatches ? "vertical" : "horizontal"}
                        textColor="primary"
                        indicatorColor='primary'
                        sx={{
                            borderColor: "divider"
                        }}
                    >
                        {tabsArr.map((item, index) => (
                            <Tab
                                key={index}
                                label={item.title.toUpperCase()}
                                sx={{
                                    fontSize: "12px"
                                }}
                            />
                        ))}
                    </Tabs>
                </aside>

                <main
                    style={{
                        flex: "1",
                        maxWidth: "800px",
                    }}
                >
                    {/* {tabsArr.map((item, index) => (
                        <TabPanel
                            key={index}
                            value={tabValue}
                            index={index}
                        >
                            { item.component }
                        </TabPanel>
                    ))} */}
                    <TabPanel
                        index={0}
                        value={tabValue}
                    >
                        <UserInfo />
                    </TabPanel>

                    <TabPanel
                        index={1}
                        value={tabValue}
                    >
                        <OrderStatus />
                    </TabPanel>

                    <TabPanel
                        index={2}
                        value={tabValue}
                    >
                        <ChangePassword />
                    </TabPanel>

                    <TabPanel
                        index={3}
                        value={tabValue}
                    >
                        <Logout setTabValue={setTabValue} />
                    </TabPanel>
                </main>
            </section>
        </div>
    )
}

export default User