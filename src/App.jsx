import React from 'react'
import { colorContext,useMode } from "./dashboard/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar   from './dashboard/topbar'
import Sidebar from './dashboard/sidebar';

function App() {
    const [theme,colorMode]=useMode();
    return (
        <colorContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
                     <Sidebar/>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column',backgroundColor: theme.palette.background.default}}>
                        <Topbar/>
                       
                    </div>
                </div>

            </ThemeProvider>

        </colorContext.Provider>
    )

}
export default App

