// PDFDownloadButton.js
import React from 'react';
import jsPDF from 'jspdf';

const PDFDownloadButton = ({ selectedRows }) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add a title to the PDF
    doc.setFontSize(18);
    doc.text('Selected Reports', 14, 22);

    // Add table headers
    doc.setFontSize(12);
    const headers = ['Job', 'Proj. Name', 'Customer', 'Date Created', 'Status', 'Type'];
    headers.forEach((header, index) => {
      doc.text(header, 14 + index * 30, 40);
    });

    // Add data rows to PDF
    selectedRows.forEach((row, rowIndex) => {
      const rowYPosition = 50 + rowIndex * 10;
      doc.text(row.jobNumber.toString(), 14, rowYPosition);
      doc.text(row.projectName, 44, rowYPosition);
      doc.text(row.customer, 74, rowYPosition);
      doc.text(row.dateCreated, 104, rowYPosition);
      doc.text(row.status, 134, rowYPosition);
      doc.text(row.type, 164, rowYPosition);
    });

    // Save the PDF
    doc.save('reports.pdf');
  };

  return (
    <button onClick={handleDownloadPDF} className="download-button mt-5">
      Download PDF
    </button>
  );
};

export default PDFDownloadButton;
