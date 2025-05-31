import React from 'react'
import { colorContext,useMode } from "./dashboard/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar   from './dashboard/topbar'
import Sidebar from './dashboard/sidebar';
import Dashboard from './dashboard/dashboard';
import Team from './dashboard/team';
import Contancts from './dashboard/contancts';
import Invoice from './dashboard/invoice';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
function App() {
    const [theme,colorMode]=useMode();
    return (
        <colorContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
                     <Sidebar/>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column',backgroundColor: theme.palette.background.default}}>
                        <Topbar/>
<Routes>
    <Route path="/" element={<Dashboard/>}/>
     <Route path="/team" element={<Team/>}/>
     <Route path="/contancts" element={<Contancts/>}/>
     <Route path="/invoice" element={<Invoice/>}/>
</Routes>
                       
                    </div>
                </div>
                </BrowserRouter>

            </ThemeProvider>

        </colorContext.Provider>
    )

}
export default App

