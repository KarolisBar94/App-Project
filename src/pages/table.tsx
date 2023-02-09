import React from 'react'
import { TableContainer,
Table,
TableHead,
TableBody,
TableRow,
TableCell,
Paper,
 } from '@mui/material';

const TablePage = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader >
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableDate.map(row => (
                        <TableRow key={row.id}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}
const tableDate = [{
    "id": 1,
    "first_name": "Shel",
    "last_name": "Crowch",
    "email": "scrowch0@so-net.ne.jp",
    "gender": "Female",
    "ip_address": "55.41.22.127"
  }, {
    "id": 2,
    "first_name": "Bliss",
    "last_name": "Firebrace",
    "email": "bfirebrace1@wikimedia.org",
    "gender": "Female",
    "ip_address": "17.165.240.118"
  }, {
    "id": 3,
    "first_name": "Fannie",
    "last_name": "Goodee",
    "email": "fgoodee2@yandex.ru",
    "gender": "Female",
    "ip_address": "161.131.159.248"
  }, {
    "id": 4,
    "first_name": "Bessy",
    "last_name": "Shah",
    "email": "bshah3@issuu.com",
    "gender": "Female",
    "ip_address": "170.6.64.73"
  }, {
    "id": 5,
    "first_name": "Wilma",
    "last_name": "Romanini",
    "email": "wromanini4@booking.com",
    "gender": "Female",
    "ip_address": "248.219.101.69"
  }, {
    "id": 6,
    "first_name": "Michael",
    "last_name": "Lembrick",
    "email": "mlembrick5@umn.edu",
    "gender": "Male",
    "ip_address": "46.196.17.101"
  }, {
    "id": 7,
    "first_name": "Leena",
    "last_name": "Pyecroft",
    "email": "lpyecroft6@nbcnews.com",
    "gender": "Female",
    "ip_address": "255.23.42.196"
  }, {
    "id": 8,
    "first_name": "Carmelita",
    "last_name": "Terzza",
    "email": "cterzza7@wix.com",
    "gender": "Genderfluid",
    "ip_address": "106.80.50.59"
  }, {
    "id": 9,
    "first_name": "Mitchell",
    "last_name": "Muggleston",
    "email": "mmuggleston8@google.de",
    "gender": "Male",
    "ip_address": "106.207.131.214"
  }, {
    "id": 10,
    "first_name": "Levi",
    "last_name": "Penelli",
    "email": "lpenelli9@slate.com",
    "gender": "Male",
    "ip_address": "148.171.90.173"
  }]
export default TablePage;