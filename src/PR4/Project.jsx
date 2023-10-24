import React, { useState } from 'react';
import { InputGroup, Form, Table, Container, Button } from 'react-bootstrap';
import { Data } from './Data';
import Pagination from './Pagination';
import './test.css';

export default function Project() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Number of items to display per page
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = Data.filter((item) => {
    const searchLowerCase = search.toLowerCase();
    return (
      searchLowerCase === '' ||
      item.first_name.toLowerCase().includes(searchLowerCase) ||
      item.last_name.toLowerCase().includes(searchLowerCase) ||
      item.email.toLowerCase().includes(searchLowerCase) ||
      item.phone.includes(searchLowerCase)
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="app">
      <Container>
        <form action="">
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Contact"
            />
          </InputGroup>
        </form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {itemsToDisplay.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {totalPages > 1 && (
        <div className="d-flex justify-content-between search-btn">
          <Button
            className={`btn-prev ${currentPage === 1 ? 'active-page' : ''}`}
            variant="primary"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            className={`btn-next ${currentPage === totalPages ? 'active-page' : ''}`}
            variant="primary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      </Container>
    </div>
  );


// // ...
// // ...

// return (
//   <div className="app">
//     <Container>
//       {/* ... Your existing code ... */}
//       {totalPages > 1 && (
//         <div className="d-flex justify-content-between search-btn">
//           <Button
//             className={`btn-prev ${currentPage === 1 ? 'active-page' : ''}`}
//             variant="primary"
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </Button>
//           <Button
//             className={`btn-next ${currentPage === totalPages ? 'active-page' : ''}`}
//             variant="primary"
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </Button>
//         </div>
//       )}
//       {totalPages > 1 && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       )}
//     </Container>
//   </div>
// );


}

