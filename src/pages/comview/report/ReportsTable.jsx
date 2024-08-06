import React from 'react';
import DataTable from 'react-data-table-component';
import './ReportsTable.css';  // Import the CSS file

const columns = [
  {
    name: 'Job',
    selector: row => row.jobNumber,
    sortable: true,
    wrap: true, // Enable text wrap for longer content
    maxWidth: '100px', // Set max width for compact layout
  },
  {
    name: 'Proj. Name',
    selector: row => row.projectName,
    sortable: true,
    wrap: true,
    minWidth: '150px',
  },
  {
    name: 'Customer',
    selector: row => row.customer,
    sortable: true,
    wrap: true,
    minWidth: '120px',
  },
  {
    name: 'Site Contact',
    selector: row => row.siteContact,
    sortable: true,
    wrap: true,
    minWidth: '150px',
  },
  {
    name: 'Date Created',
    selector: row => row.dateCreated,
    sortable: true,
    wrap: true,
    minWidth: '150px',
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    wrap: true,
    minWidth: '150px',
  },
  {
    name: 'Email Sent',
    selector: row => row.emailSent,
    sortable: true,
    wrap: true,
    maxWidth: '100px',
  },
  {
    name: 'Email Sent to',
    selector: row => row.emailSentTo,
    wrap: true,
    minWidth: '200px',
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable: true,
    wrap: true,
    minWidth: '150px',
  },
  {
    name: 'Download',
    cell: row => <input type="checkbox" checked={row?.download} readOnly />,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    minWidth: '100px',
  },
];

// const data = [
//   {
//     id: 1,
//     jobNumber: '12345',
//     projectName: 'Sephora',
//     customer: 'Cambria',
//     siteContact: 'Dave',
//     dateCreated: 'Yes',
//     status: 'Complete',
//     emailSent: 'Yes',
//     emailSentTo: 'Me@Concrete.com',
//     type: 'G.P.R',
//     download: true,
//   },
//   {
//     id: 2,
//     jobNumber: '12344',
//     projectName: 'Tim Hortons',
//     customer: 'Torque',
//     siteContact: 'Steve',
//     dateCreated: 'No',
//     status: 'Complete',
//     emailSent: 'Yes',
//     emailSentTo: 'TEst1@blah.com',
//     type: 'Utility Report',
//     download: true,
//   },
//   {
//     id: 3,
//     jobNumber: '12333',
//     projectName: 'Tesla',
//     customer: 'Hi-Tech',
//     siteContact: 'Rob',
//     dateCreated: 'Yes',
//     status: 'Not complete',
//     emailSent: 'No',
//     emailSentTo: 'Test tow @Blah.ca',
//     type: 'G.P.R',
//     download: false,
//   },
//   {
//     id: 4,
//     jobNumber: '12334',
//     projectName: 'Red Wolf',
//     customer: 'Iplumb',
//     siteContact: 'Ken',
//     dateCreated: 'Yes',
//     status: 'Not Complete',
//     emailSent: 'No',
//     emailSentTo: 'Test3@tor.ca',
//     type: 'Utility Locate',
//     download: false,
//   },
//   // Add more dummy data for testing responsiveness
//   {
//     id: 5,
//     jobNumber: '12346',
//     projectName: 'Starbucks',
//     customer: 'Froth',
//     siteContact: 'Anna',
//     dateCreated: 'Yes',
//     status: 'Complete',
//     emailSent: 'Yes',
//     emailSentTo: 'anna@froth.com',
//     type: 'Utility Report',
//     download: true,
//   },
//   {
//     id: 6,
//     jobNumber: '12347',
//     projectName: 'Apple',
//     customer: 'Tech Giants',
//     siteContact: 'John',
//     dateCreated: 'No',
//     status: 'Not Complete',
//     emailSent: 'No',
//     emailSentTo: 'john@techgiants.com',
//     type: 'G.P.R',
//     download: false,
//   },
// ];

const customStyles = {
  headCells: {
    style: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#555',
      backgroundColor: '#e6e6e6',
    },
  },
  cells: {
    style: {
      fontSize: '13px',
      color: '#333',
      padding: '10px',
    },
  },
  rows: {
    style: {
      minHeight: '40px', // Set a consistent row height
      '&:hover': {
        backgroundColor: '#f1f1f1',
      },
    },
  },
};

const ReportsTable = ({data}) => (
  <div className="reports-table-container">
    <h2>Reports</h2>
    <DataTable
      columns={columns}
      data={data}
      pagination
      customStyles={customStyles}
      highlightOnHover
      responsive
    />
    <button className="download-button mt-5">
      Download
    </button>
  </div>
);

export default ReportsTable;
