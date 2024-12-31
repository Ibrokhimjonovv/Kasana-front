import React from "react";
import "./Products.scss";
import ProfileSideBar from "../../../components/profileSideBar/profileSideBar";
import { Link } from "react-router-dom";
import authorImg from "../../admin/admin-products/authorImg.png";


const Products = () => {
  const products = [
    {
      id: 1,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 4,
      status: true,
    },
    {
      id: 2,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 3,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 4,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 5,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 6,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 7,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 8,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 9,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 10,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
    {
      id: 11,
      productImg: authorImg,
      productTitle: "Mahsulot nomi",
      authorImg: authorImg,
      sku: "HG5A532QS",
      category: "#Kategoriya",
      price: 200000,
      rating: 2.7,
      status: false,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / usersPerPage))
      setCurrentPage(currentPage + 1);
  };
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentProducts = products.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(products.length / usersPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const startUserIndex = indexOfFirstUser + 1;
  const endUserIndex =
    indexOfLastUser < products.length ? indexOfLastUser : products.length;

  // Har bir mahsulotning statusini saqlash uchun state
  const [productStatuses, setProductStatuses] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.status; // Initial holatni mahsulotdan olish
      return acc;
    }, {})
  );

  // Checkbox holatini yangilash funksiyasi
  const handleStatusChange = (id) => {
    setProductStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: !prevStatuses[id], // Statusni teskari qilish
    }));
  };
  return (
    <div className="profile-container">
      <div className="to-back">
        <div className="backInner">
          <Link to="/">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 18.3334V10H12.5V18.3334M2.5 7.50002L10 1.66669L17.5 7.50002V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.50002Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <Link to="/profile">Shaxsiy kabinet</Link>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span></span>
        </div>
      </div>
      <div className="profile-inner">
        <div className="left">
          <ProfileSideBar />
        </div>
        <div className="right">
          <div className="page-title">
            <h2>Mahsulotlar</h2>
          </div>
          <table className="user-table">
            <thead>
              <tr>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  <input type="checkbox" />
                </th>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Rasmi
                </th>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Nomi
                </th>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Muallif
                </th>
                {/* <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  SKU
                </th> */}
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Kategoriya
                </th>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Narx
                </th>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Reyting
                </th>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Aktivligi
                </th>
                <th scope="col" style={{ backgroundColor: "#E7F4F1" }}>
                  Amallar
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      className="productImg"
                      src={product.productImg}
                      alt=""
                    />
                  </td>
                  <td>{product.productTitle}</td>
                  <td>
                    <img className="authorImg" src={product.authorImg} alt="" />
                  </td>
                  {/* <td className="sku">{product.sku}</td> */}
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>
                    <StarRating rating={product.rating} />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      id={`status-${product.id}`}
                      checked={productStatuses[product.id]}
                      onChange={() => handleStatusChange(product.id)}
                      className="check-inp"
                    />
                    <label
                      htmlFor={`status-${product.id}`}
                      className="checkbox"
                    >
                      <span
                        className={productStatuses[product.id] ? "active" : ""}
                      ></span>
                    </label>
                  </td>
                  <td>
                    <button className="btn btn-secondary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0007 3.33333C10.9211 3.33333 11.6673 2.58714 11.6673 1.66667C11.6673 0.746192 10.9211 0 10.0007 0C9.08018 0 8.33398 0.746192 8.33398 1.66667C8.33398 2.58714 9.08018 3.33333 10.0007 3.33333Z"
                          fill="#41A58D"
                        />
                        <path
                          d="M10.0007 11.6673C10.9211 11.6673 11.6673 10.9211 11.6673 10.0007C11.6673 9.08018 10.9211 8.33398 10.0007 8.33398C9.08018 8.33398 8.33398 9.08018 8.33398 10.0007C8.33398 10.9211 9.08018 11.6673 10.0007 11.6673Z"
                          fill="#41A58D"
                        />
                        <path
                          d="M10.0007 19.9993C10.9211 19.9993 11.6673 19.2532 11.6673 18.3327C11.6673 17.4122 10.9211 16.666 10.0007 16.666C9.08018 16.666 8.33398 17.4122 8.33398 18.3327C8.33398 19.2532 9.08018 19.9993 10.0007 19.9993Z"
                          fill="#41A58D"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <div className="soni">
                {products.length} tadan {startUserIndex} - {endUserIndex} lar
                ko’rsatilmoqda
              </div>
              <div className="users-pages-buttons">
                <button onClick={prevPage} disabled={currentPage === 1}>
                  <img src={left} alt="" />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`pagination-btn ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  disabled={
                    currentPage === Math.ceil(products.length / usersPerPage)
                  }
                >
                  <img src={right} alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;