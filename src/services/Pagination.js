import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardContainer from '../components/utilities/CardContainer';

const perPage = 4;

function Pagination() {
  const [pageNumber, setPageNumber] = useState(0);
  const data = [
    {
      id: 1,
      image: 'https://www.stevensegallery.com/250/150',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 2,
      image: 'https://www.placecage.com/c/250/150',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 3,
      image:
        'https://media.istockphoto.com/photos/dog-surfing-on-a-wave-picture-id912592258',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 4,
      image:
        'https://media.istockphoto.com/photos/dog-surfing-on-a-wave-picture-id912592258',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 1,
      image: 'https://www.placecage.com/c/250/150',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/photos/dog-surfing-on-a-wave-picture-id912592258',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 3,
      image: 'https://www.stevensegallery.com/250/150',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 4,
      image: 'https://www.placecage.com/c/250/150',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/dog-surfing-on-a-wave-picture-id912592258',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/photos/dog-surfing-on-a-wave-picture-id912592258',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 3,
      image: 'https://www.placecage.com/c/250/150',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
    {
      id: 4,
      image: 'https://www.stevensegallery.com/250/150',
      title: 'Dog Surfing',
      date: 'Monday, June 13 11:00 AM CEST',
      venue: 'Maui, Hawaii',
      organizer: 'The Notorious D.O.G.',
    },
  ];

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  const offset = pageNumber * perPage;
  const currentPageData = data.slice(offset, offset + perPage);

  const pageCount = Math.ceil(data.length / perPage);

  return (
    <>
      <CardContainer title={'Results:'} data={currentPageData} />
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
