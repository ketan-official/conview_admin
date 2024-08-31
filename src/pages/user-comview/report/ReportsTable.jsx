// ReportsTable.js
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

import './ReportsTable.css';
import PDFDownloadButton from '../../common/PDFDownloadButton';

const columns = [
  { name: 'Job', selector: row => row.jobNumber, sortable: true, wrap: true, maxWidth: '100px' },
  { name: 'Proj. Name', selector: row => row.projectName, sortable: true, wrap: true, minWidth: '150px' },
  { name: 'Customer', selector: row => row.customer, sortable: true, wrap: true, minWidth: '120px' },
  { name: 'Site Contact', selector: row => row.siteContact, sortable: true, wrap: true, minWidth: '150px' },
  { name: 'Date Created', selector: row => row.dateCreated, sortable: true, wrap: true, minWidth: '150px' },
  { name: 'Status', selector: row => row.status, sortable: true, wrap: true, minWidth: '150px' },
  { name: 'Email Sent', selector: row => row.emailSent, sortable: true, wrap: true, maxWidth: '100px' },
  { name: 'Email Sent to', selector: row => row.emailSentTo, wrap: true, minWidth: '200px' },
  { name: 'Type', selector: row => row.type, sortable: true, wrap: true, minWidth: '150px' },
  // { name: 'Download', cell: row => <input type="checkbox" checked={row?.download} readOnly />, ignoreRowClick: true, allowOverflow: true, button: true, minWidth: '100px' },
];

const customStyles = {
  headCells: { style: { fontSize: '14px', fontWeight: '600', color: '#555', backgroundColor: '#e6e6e6' } },
  cells: { style: { fontSize: '13px', color: '#333', padding: '10px' } },
  rows: { style: { minHeight: '40px', '&:hover': { backgroundColor: '#f1f1f1' } } },
};

const ReportsTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelected = (state) => {
    console.log(state)
    setSelectedRows(state.selectedRows);
  };

  return (
    <div className="reports-table-container">
      <h2>Reports</h2>
      <DataTable
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
        highlightOnHover
        responsive
        selectableRows // Enable row selection
        onSelectedRowsChange={handleRowSelected} // Handle row selection change
      />
     <div className=" left-5 top-5 bg-gray-100 p-2 text-xs border border-gray-300 rounded text-gray-700 z-50 text-red">
  For download select row first
</div>

      <PDFDownloadButton selectedRows={selectedRows} /> {/* Add the PDFDownloadButton */}
    </div>
  );
};

export default ReportsTable;
