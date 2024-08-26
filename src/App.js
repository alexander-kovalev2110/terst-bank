import { useDispatch } from "react-redux"
import Box from "@mui/material/Box"

import ControlPanel from "./components/ControlPanel"
import BankTable from "./components/BnkTable"
import { fetchData } from "./store/actions/tableAction"

import './App.css';

function App() {
  const dispatch = useDispatch()
  dispatch(fetchData)

  return (
    <Box>
      <ControlPanel />
      <BankTable />
    </Box>
  );
}

export default App
