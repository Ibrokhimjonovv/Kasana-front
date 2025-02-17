import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileSideBar from "../../../components/profileSideBar/profileSideBar";
import InputMask from "react-input-mask";
import eye from "../../admin/addUser/eye.png";
import "./EditProfile.scss";
import EditorBar from "../../../components/Editor/Editor";

const EditProfile = () => {
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateBirth: "",
    gender: "",
    faoliyati: "",
    phone: "",
    email: "",
    region: selectedRegion,
    district: "",
    village: "",
    content: "",
    bio: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target || { name: "content", value: e };
    setFormData({ ...formData, [name]: value });
  };

//   const handleProfileUpdate = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     console.log("Submitting the profile update..."); // Konsolda yangilash jarayoni haqida xabar

//     try {
//       const response = await fetch(
//         "https://your-api-url.com/api/update-profile",
//         {
//           method: "PUT", // Profilni yangilash uchun PUT metodi
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Agar autentifikatsiya kerak bo'lsa
//           },
//           body: JSON.stringify({
//             ...formData, // formData obyekti to'liq yuboriladi
//           }),
//         }
//       );

//       console.log("Response received:", response); // Konsolda API javobini ko'rsatish

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Profile updated successfully:", data); // Profil yangilandi
//         setError(""); // Hato bo'lsa, xatolikni tozalash
//       } else {
//         console.log("Profile update failed:", data);
//         setError(data.message || "Profile update failed!"); // Xatolik haqida xabar
//       }
//     } catch (err) {
//       console.error("Error occurred while updating profile:", err); // Konsolda xatolikni ko'rsatish
//       setError("An error occurred while updating profile.");
//     }
//   };

  // Loaction start
  // Loaction start
  const regionsURL =
    "https://raw.githubusercontent.com/MIMAXUZ/uzbekistan-regions-data/master/JSON/regions.json";
  const districtsURL =
    "https://raw.githubusercontent.com/MIMAXUZ/uzbekistan-regions-data/master/JSON/districts.json";
  const villagesURL =
    "https://raw.githubusercontent.com/MIMAXUZ/uzbekistan-regions-data/master/JSON/villages.json";
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredVillages, setFilteredVillages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [regionsResponse, districtsResponse, villagesResponse] =
          await Promise.all([
            fetch(regionsURL),
            fetch(districtsURL),
            fetch(villagesURL),
          ]);

        if (
          !regionsResponse.ok ||
          !districtsResponse.ok ||
          !villagesResponse.ok
        ) {
          throw new Error("Ma'lumotlarni yuklashda xatolik yuz berdi!");
        }

        const regionsData = await regionsResponse.json();
        const districtsData = await districtsResponse.json();
        const villagesData = await villagesResponse.json();

        setRegions(regionsData);
        setDistricts(districtsData);
        setVillages(villagesData);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik yuz berdi:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const filtered = districts.filter(
        (district) =>
          parseInt(district.region_id, 10) === parseInt(selectedRegion.id, 10)
      );
      console.log(filtered);
      
      setFilteredDistricts(filtered);
      setSelectedDistrict("");
      setFilteredVillages([]);
    } else {
      setFilteredDistricts([]);
      setFilteredVillages([]);
    }
  }, [selectedRegion, districts]);
  useEffect(() => {
    if (selectedDistrict) {
      const filtered = villages.filter(
        (village) =>
          parseInt(village.district_id, 10) === parseInt(selectedDistrict.id, 10)
      );
      setFilteredVillages(filtered);
    } else {
      setFilteredVillages([]);
    }
  }, [selectedDistrict, villages]);
  // Loaction end

  const handleRegionChange = (e) => {
    const selected = regions.find(region => region.id === e.target.value);
    console.log(selected);
    
    setSelectedRegion(selected);
    setFormData({ ...formData, region: selected.name_uz, district: "", village: "" });
  };
  
  const handleDistrictChange = (e) => {
    console.log(e);
    
    const selected = districts.find(district => district.id === e.target.value);
    setSelectedDistrict(selected);
    setFormData({ ...formData, district: selected.name_uz, village: "" });
  };
  
  const handleVillageChange = (e) => {
    const selected = villages.find(village => village.id === e.target.value);
    setSelectedVillage(selected);
    setFormData({ ...formData, village: selected.name_uz });
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
          <span>Yoqqan mahsulotlar</span>
        </div>
      </div>
      <div className="profile-inner edit-profile">
        <div className="left">
          <ProfileSideBar />
        </div>
        <div className="right">
          <div className="page-title">
            <h2>Profilni tahrirlash</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
