import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const axios = require('axios');

const App = () =>{
  const [users, setUsers] = useState([]);

  const initialLoad = async () =>{
    try {
      console.log(process.env);
      const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users`);
      setUsers(result.data);
    }catch (err){
      console.log(err);
    }
  };

  React.useEffect(() => {
    initialLoad();
  }, []);
  return (
    <div>
      {users && users.length> 0 ? (<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>):
    (   <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
    }
     
    </div>
  )
}

export default App;
