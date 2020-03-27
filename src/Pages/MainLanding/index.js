import React from 'react';
import styles from './mainlanding.module.css';
import { withStyles } from '@material-ui/core/styles';
import MainPageSeach from '../../Components/MainPageSearch';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'lightgray',
    color: theme.palette.common.black,
    fontWeight: 800,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const MainLanding = () => {
  
  const createHospitalData = (name, city, phone, email, requirements, urgency) => {
    return { name, city, phone, email, requirements, urgency };
  }

  const createSuppliersData = (contactName, companyName, city, phone, email, supplies) => {
    return { contactName, companyName, city, phone, email, supplies };
  }

  // sample data
  const hospitalGridData = [
    createHospitalData('Hospital 1', 'Delhi', 9999999999, 'hosp1@aa.com', 'mask', 'asap'),
    createHospitalData('Hospital 2', 'Delhi', 9999999999, 'hosp1@aa.com', 'mask', 'asap'),
    createHospitalData('Hospital 3', 'Delhi', 9999999999, 'hosp1@aa.com', 'mask', 'asap'),
    createHospitalData('Hospital 4', 'Delhi', 9999999999, 'hosp1@aa.com', 'mask', 'asap'),
  ];

  const suppliersGridData = [
    createSuppliersData('Supplier1', 'Company1', 'Delhi', 9090909090, 'sup1@hh.com', 'mask and ventilators'),
    createSuppliersData('Supplier1', 'Company1', 'Delhi', 9090909090, 'sup1@hh.com', 'mask and ventilators'),
    createSuppliersData('Supplier1', 'Company1', 'Delhi', 9090909090, 'sup1@hh.com', 'mask and ventilators'),
    createSuppliersData('Supplier1', 'Company1', 'Delhi', 9090909090, 'sup1@hh.com', 'mask and ventilators'),
    createSuppliersData('Supplier1', 'Company1', 'Delhi', 9090909090, 'sup1@hh.com', 'mask and ventilators'),
    createSuppliersData('Supplier1', 'Company1', 'Delhi', 9090909090, 'sup1@hh.com', 'mask and ventilators'),
    createSuppliersData('Supplier1', 'Company1', 'Delhi', 9090909090, 'sup1@hh.com', 'mask and ventilators'),
  ]

  return (
    <div className={styles.container}>
      <MainPageSeach />
      <div className={styles.gridContainer}>
        <div className={styles.subTitle}>Requirements by Hospitals</div>
        <TableContainer component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Requirements</StyledTableCell>
                <StyledTableCell align="right">Urgency</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hospitalGridData.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.requirements}</TableCell>
                  <TableCell align="right">{row.urgency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.subTitle}>Registered Suppliers</div>
        <TableContainer component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Contact Name</StyledTableCell>
                <StyledTableCell align="right">Company Name</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Supplies</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliersGridData.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.contactName}
                  </TableCell>
                  <TableCell align="right">{row.companyName}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.supplies}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
};

export default MainLanding;