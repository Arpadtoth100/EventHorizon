import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardContainer from '../components/utilities/CardContainer';

function Pagination({ title, data }) {
  const [pageNumber, setPageNumber] = useState(0);

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  const perPage = 5;
  const offset = pageNumber * perPage;
  const currentPageData = data.slice(offset, offset + perPage);

  const pageCount = Math.ceil(data.length / perPage);

  return (
    <>
      <CardContainer title={title} data={currentPageData} />
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePageHandler}
        containerClassName={'paginationBtns'}
        previousLinkClassName={'prevBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </>
  );
}

export default Pagination;
