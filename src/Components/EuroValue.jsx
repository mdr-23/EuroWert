import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function EuroValue({ usdRates, gbpRates, flag, czkRates, dkkRates, iskRates, nokRates, sekRates, plnRates }) {

    return(
            <TableRow
              key={flag}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={flag} width="28" height="18" alt="Country flag" />
              </TableCell>
              <TableCell>{usdRates} {gbpRates} {czkRates} {dkkRates} {iskRates} {nokRates} {sekRates} {plnRates}</TableCell>
            </TableRow>

    )
}

export default EuroValue