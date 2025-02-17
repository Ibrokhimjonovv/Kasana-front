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
              <label htmlFor="status">Belgi</label>
              <div className="inputs">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0003 21.6004C12.0003 21.6004 19.5134 14.9221 19.5134 9.91343C19.5134 5.76409 16.1497 2.40039 12.0003 2.40039C7.85101 2.40039 4.4873 5.76409 4.4873 9.91343C4.4873 14.9221 12.0003 21.6004 12.0003 21.6004Z"
                    stroke="#B2B2B2"
                    stroke-width="2"
                  />
                  <path
                    d="M14.4007 9.60054C14.4007 10.926 13.3261 12.0005 12.0007 12.0005C10.6752 12.0005 9.60066 10.926 9.60066 9.60054C9.60066 8.27506 10.6752 7.20054 12.0007 7.20054C13.3261 7.20054 14.4007 8.27506 14.4007 9.60054Z"
                    stroke="#B2B2B2"
                    stroke-width="2"
                  />
                </svg>

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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40039 12.0004C2.40039 6.69846 6.69846 2.40039 12.0004 2.40039C17.3023 2.40039 21.6004 6.69846 21.6004 12.0004C21.6004 17.3023 17.3023 21.6004 12.0004 21.6004C6.69846 21.6004 2.40039 17.3023 2.40039 12.0004Z"
                    stroke="#B2B2B2"
                    stroke-width="2"
                  />
                  <path
                    d="M18.0004 12.5004V11.5004C18.0004 8.46282 15.538 6.00039 12.5004 6.00039C12.2242 6.00039 12.0004 6.22425 12.0004 6.50039V17.5004C12.0004 17.7765 12.2242 18.0004 12.5004 18.0004C15.538 18.0004 18.0004 15.538 18.0004 12.5004Z"
                    stroke="#B2B2B2"
                    stroke-width="2"
                  />
                </svg>

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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.35795 19.6773C8.06747 19.6773 6.77795 19.186 5.79611 18.2042C3.83099 16.2391 3.83099 13.0416 5.79611 11.0764L11.4911 5.26172L12.5197 6.26924L6.81971 12.0892C5.41091 13.4983 5.41091 15.7821 6.81467 17.1859C8.21843 18.5894 10.5023 18.5896 11.9058 17.1859L17.6005 11.3712C18.4477 10.5237 18.4477 9.15332 17.6055 8.31116C16.7634 7.46924 15.393 7.46876 14.5508 8.31116L8.85587 14.1259C8.71475 14.2672 8.63987 14.4482 8.63987 14.6404C8.63987 14.8327 8.71475 15.0136 8.85059 15.1497C9.13139 15.4303 9.58811 15.4303 9.86891 15.1497L15.5639 9.335L16.5925 10.3425L10.8925 16.1625C10.4792 16.5758 9.93683 16.8004 9.35987 16.8004C8.78291 16.8004 8.24051 16.5758 7.83251 16.1678C7.42451 15.7598 7.19987 15.2174 7.19987 14.6404C7.19987 14.0635 7.42451 13.5211 7.83251 13.1131L13.5272 7.29836C14.936 5.88956 17.2201 5.88932 18.6236 7.29308C20.0271 8.69684 20.0271 10.9807 18.6236 12.3842L12.9289 18.1989C11.9432 19.1848 10.6499 19.6773 9.35795 19.6773Z"
                    fill="#AFB3B5"
                  />
                </svg>
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
