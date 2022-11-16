import Pagination from 'react-bootstrap/Pagination';
interface Pages {
  page: number;
  totalPages: number;
  onPage(p: string): void;
}

const PagNav = (props: Pages) => {
  const currentPageHandler = (page: string) => {
    props.onPage(page);
  };

  let items = [];
  for (let number = 1; number <= 20; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.page}
        onClick={() => currentPageHandler(number.toString())}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className='justify-content-center'>
      <Pagination.First />
      <Pagination.Prev />
      {items}

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default PagNav;
