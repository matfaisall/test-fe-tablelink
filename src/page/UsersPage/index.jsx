import React, { useState } from "react";
import dataUser from "../../../data/data.json";
import {
  Container,
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TextField,
} from "@mui/material";

const UsersPage = () => {
  const [users, setUsers] = useState(dataUser);

  const [searchName, setSearchName] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // console.log(page, rowsPerPage);

  console.log(
    users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );

  const userPerpage = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // console.log(userPerpage);

  // handler for pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // console.log(searchName);

  // const hanldeSearch = () => {
  //   const filterUser = userPerpage?.filter((user) =>
  //     user.name.toLowerCase().includes(searchName.toLowerCase())
  //   );

  //   setUsers(filterUser);
  // };

  const filterUser = userPerpage?.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  console.log(filterUser);

  return (
    <Container maxWidth="lg">
      <TextField
        id="search"
        name="search"
        value={searchName}
        label="Search"
        variant="outlined"
        onChange={(event) => setSearchName(event.target.value)}
      />
      <Box sx={{}}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Occupation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterUser?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.occupation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default UsersPage;
