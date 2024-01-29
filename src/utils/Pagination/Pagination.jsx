/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate'
import './Pagination.css'
const Pagination = ({handelOnSelectPage, pageCount }) => {
    const handlePageClick = (data) => {
        handelOnSelectPage(data.selected + 1)
    };

    return (
        <div dir='ltr' className='py-4'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="prev"
                containerClassName={"pagination justify-center flex-wrap p-0 m-0"}
                pageClassNam={"page-item"}
                pageLinkClassName={"page-link "}
                nextLinkClassName={"page-link nextLink "}
                previousLinkClassName={"page-link nextLink  "}
                nextClassName={"page-item text-center   "}
                previousClassName={"page-item text-center "}
                breakClassName={"page-item "}
                breakLinkClassName={"page-link break-link"}
                activeLinkClassName={"active a"}

            />
        </div>
    )
}

export default Pagination