import React, { useState, useEffect } from "react";
import entries from "../data.json";

const Home = () => {
  // console.log(entries);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [CurrentItems, setCurrentItems] = useState();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = entries.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(currentItems);
  console.log(indexOfFirstItem);
  console.log(indexOfLastItem);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = entries.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
  }, [entries, currentPage, itemsPerPage]);

  const onPrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  // console.log(currentItems);
  let i = 1;

  for (let item of currentItems) {
    item.no = indexOfFirstItem + i;
    i++;
  }

  console.log(currentItems)
  // const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = entries.slice(firstIndex);
  // const nPage = Math.ceil(entries.length / recordsPerPage);
  // const numbers = [...Array(nPage + 1).keys()].slice(1);

  // // const onDataShow = () => {
  // //   console.log(">>>>");
  // // };

  // const prePage = () => {
  //   if (currentPage !== firstIndex) {
  //     setCurrentPage(currentPage-1)
  //   }
  // }

  // const changeCPage =(id) => {
  //     setCurrentPage(id)
  // }

  // const nextPage =() => {
  //   if (currentPage !== lastIndex) {
  //     setCurrentPage(currentPage+1)
  //   }
  // }

  // let i = 1;

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              Pagination
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <div>
          <h1>
            <u>Pagination Data</u>
          </h1>
        </div>
        <table className="table mt-5 ">
          <thead>
            <tr>
              <th scope="col">Key</th>
              <th scope="col">Country</th>
              <th scope="col">Name</th>
              <th scope="col">Lng</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, idx) => {
              return (
                <tr>
                  <th scope="row">{user.no}</th>
                  <td>{user.country}</td>
                  <td>{user.name}</td>
                  <td>{user.lng}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>

            {numbers.map((num, i) => (
              <li
                className={`page-item ${currentPage === 0 ? "active" : ""}`}
                key={i}
              >
                <a href="#" className="page-link" onClick={()=>changeCPage(num)}>
                  {num}
                </a>
              </li>
            ))}

            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav> */}

        <div>
          <button
            className="btn btn-outline-primary ml-2"
            onClick={onPrevClick}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button className="btn btn-outline-primary" onClick={onNextClick}>
            Next
          </button>
          <select onChange={(e) => setItemsPerPage(parseInt(e.target.value))}>
            <option value="10">10 items per page</option>
            <option value="20">20 items per page</option>
            <option value="30">30 items per page</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Home;
