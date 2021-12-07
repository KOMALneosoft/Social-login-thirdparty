import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Row } from "react-bootstrap";

export default function Pagination() {
  const [page, setPage] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  // const fetch=()=>{
  //     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)

  //         .then(res=>res.json())
  //         .then(data=>{
  //             setData(data)
  //         })
  // }
  const handlePageClick = (data) => {
    setPage(true);
    console.log(setPage);
    //  fetch();
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
      });
  };
  return (
    <div
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        border: "3px solid black",
      }}
    >
      {page ? (
        <>
          {data2.map((pro) => (
            <h4>
              {pro.id}
              <br />
              {pro.title}
            </h4>
          ))}
        </>
      ) : (
        <>
          {data.map((pro) => (
            <h4>
              {pro.id}
              <br />
              {pro.title}
            </h4>
          ))}
        </>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}
