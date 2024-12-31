import React, { useState, useEffect } from "react";
import "./addProduct.scss";
import ProfileSideBar from "../../../components/profileSideBar/profileSideBar";
import { Link } from "react-router-dom";

const AddProducts = () => {
  const [avaName, setAvaName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvaName(file.name);
    } else {
      setAvaName("");
    }
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
          <Link to="/profile/products">Mahsulotlarim</Link>
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
          <span>Mahsulot qo'shish</span>
        </div>
      </div>
      <div className="profile-inner">
        <div className="left">
          <ProfileSideBar />
        </div>
        <div className="right">
          <div className="page-title">
            <h2>Mahsulot qo'shish</h2>
          </div>
          <p style={{ fontWeight: 600, margin: "10px 0" }}>
            Mahsulot ma'lumotlari
          </p>
          <form action="">
            <div className="input-row">
              <label htmlFor="firstName">Mahsulot nomi</label>
              <div className="inputs">
                <input type="text" placeholder="Nomini kiriting" required />
              </div>
              <div className="error-message">To'ldirilishi shart</div>
            </div>
            <div className="input-row">
              <label htmlFor="firstName">Narxi</label>
              <div className="inputs">
                <div className="cheg">
                  <input type="text" placeholder="Narxni kiriting" required />
                  <input
                    type="checkbox"
                    id={`status-${product.id}`}
                    checked={productStatuses[product.id]}
                    onChange={() => handleStatusChange(product.id)}
                    className="check-inp"
                  />
                  <label htmlFor={`status-${product.id}`} className="checkbox">
                    <span
                      className={productStatuses[product.id] ? "active" : ""}
                    ></span>
                  </label>
                </div>
              </div>
              <div className="error-message">To'ldirilishi shart</div>
            </div>
            <div className="input-row">
                <label htmlFor="">Chegirma foizi</label>
                <div className="inputs">
                    <input type="text" placeholder=""/>
                </div>
            </div>
            <div className="input-row">
              <label htmlFor="status">Belgi</label>
              <div className="inputs">
                <select name="status" id="status">
                  <option value="ikonka">Ikonka</option>
                  <option value="ikonka2">Ikonka 2</option>
                </select>
              </div>
              <div className="error-message">To'ldirilishi shart</div>
            </div>
            <div className="input-row">
              <label htmlFor="status">Holati</label>
              <div className="inputs">
                <select name="status" id="status">
                  <option value="active">Aktiv</option>
                  <option value="non-active">Aktiv emas</option>
                </select>
              </div>
              <div className="error-message">To'ldirilishi shart</div>
            </div>
            <div className="input-row">
              <label htmlFor="file">Avatar</label>
              <div className="inputs">
                <label htmlFor="file" id="file-label">
                  {avaName || "Rasm tanlang"}
                </label>
                <input
                  type="file"
                  placeholder="Rasm tanlang"
                  id="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="error-message">To'ldirilishi shart</div>
            </div>
            <div className="button">
              <button type="submit" id="sub">
                Qo'shish
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1104_843)">
                    <path
                      d="M11.167 14V12.6667C11.167 11.9594 10.886 11.2811 10.3859 10.781C9.88585 10.281 9.20757 10 8.50033 10H3.83366C3.12641 10 2.44814 10.281 1.94804 10.781C1.44794 11.2811 1.16699 11.9594 1.16699 12.6667V14M13.8337 5.33333V9.33333M15.8337 7.33333H11.8337M8.83366 4.66667C8.83366 6.13943 7.63975 7.33333 6.16699 7.33333C4.69423 7.33333 3.50033 6.13943 3.50033 4.66667C3.50033 3.19391 4.69423 2 6.16699 2C7.63975 2 8.83366 3.19391 8.83366 4.66667Z"
                      stroke="#E7F4F1"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1104_843">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="close">
                Bekor qilish
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L1 9M1 1L9 9"
                    stroke="#41A58D"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;