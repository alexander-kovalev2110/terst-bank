import { AppBar } from "@mui/material"

import BankTitle from "./BankTitle"
import HandleBar from "./HandleBar"
import GroupBar from "./GroupBar"

function ControlPanel() {
    return (
        <AppBar>
            <BankTitle />
            <HandleBar />
            <GroupBar />
        </AppBar>
)
  }
  
  export default ControlPanel