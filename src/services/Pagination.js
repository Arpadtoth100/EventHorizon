import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardContainer from '../components/utilities/CardContainer';

function Pagination({ title, data, searchscreen_class }) {
  const [pageNumber, setPageNumber] = useState(0);

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  const perPage = 4;
  const offset = pageNumber * perPage;
  const currentPageData = data.slice(offset, offset + perPage);

  const pageCount = Math.ceil(data.length / perPage);

  return (
    <>
      <CardContainer
        title={title}
        data={currentPageData}
        searchscreen_class={searchscreen_class}
      />
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
