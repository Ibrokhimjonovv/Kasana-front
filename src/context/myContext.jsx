import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { usersServerUrl, eCommerseServerUrl } from "../SuperVars";


export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newsList] = useState([]);
  const [documents] = useState([]);
  const [courses] = useState([]);
  const [announcements] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const announcements = [
    {
      id: 1,
      title: "Novvoy yordamchisi",
      price: "100 000 - 200 000 so’m/soatiga",
      details: ["2+ yil tajriba", "Qisqa vaqtli ish", "Toshkent shaxri"],
      authorImg: "authorImg1.png",
      author: "Dilshodbek Tursunov",
      date: "Bugun",
      views: 456,
      authorImg: authorImg,
      location: "Toshkent shaxri",
      timeWork: "To'liq stavka",
    },
    {
      id: 2,
      title: "Uy-joy ta'mirlash ustasi",
      price: "300 000 so’m/kuniga",
      details: ["2+ yil tajriba", "Doimiy ish", "Toshkent shaxri"],
      authorImg: "authorImg2.png",
      author: "Sardorbek Qodirov",
      date: "Bugun",
      views: 324,
      authorImg: authorImg2,
    },
    {
      id: 3,
      title: "Sotuvchi",
      price: "150 000 - 250 000 so’m/kuniga",
      details: ["1+ yil tajriba", "O'rindoshlik ish", "Andijon shaxri"],
      authorImg: "authorImg3.png",
      author: "Shohruhbek Salimov",
      date: "3 kun oldin",
      views: 789,
      authorImg: authorImg,
    },
    {
      id: 4,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 5,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 6,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 7,
      title: "Novvoy yordamchisi",
      price: "100 000 - 200 000 so’m/soatiga",
      details: ["2+ yil tajriba", "Qisqa vaqtli ish", "Toshkent shaxri"],
      authorImg: "authorImg1.png",
      author: "Dilshodbek Tursunov",
      date: "Bugun",
      views: 456,
      authorImg: authorImg,
    },
    {
      id: 8,
      title: "Uy-joy ta'mirlash ustasi",
      price: "300 000 so’m/kuniga",
      details: ["2+ yil tajriba", "Doimiy ish", "Toshkent shaxri"],
      authorImg: "authorImg2.png",
      author: "Sardorbek Qodirov",
      date: "Bugun",
      views: 324,
      authorImg: authorImg2,
    },
    {
      id: 9,
      title: "Sotuvchi",
      price: "150 000 - 250 000 so’m/kuniga",
      details: ["1+ yil tajriba", "O'rindoshlik ish", "Andijon shaxri"],
      authorImg: "authorImg3.png",
      author: "Shohruhbek Salimov",
      date: "3 kun oldin",
      views: 789,
      authorImg: authorImg,
    },
    {
      id: 10,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 11,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 12,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 13,
      title: "Novvoy yordamchisi",
      price: "100 000 - 200 000 so’m/soatiga",
      details: ["2+ yil tajriba", "Qisqa vaqtli ish", "Toshkent shaxri"],
      authorImg: "authorImg1.png",
      author: "Dilshodbek Tursunov",
      date: "Bugun",
      views: 456,
      authorImg: authorImg,
    },
    {
      id: 14,
      title: "Uy-joy ta'mirlash ustasi",
      price: "300 000 so’m/kuniga",
      details: ["2+ yil tajriba", "Doimiy ish", "Toshkent shaxri"],
      authorImg: "authorImg2.png",
      author: "Sardorbek Qodirov",
      date: "Bugun",
      views: 324,
      authorImg: authorImg2,
    },
    {
      id: 15,
      title: "Sotuvchi",
      price: "150 000 - 250 000 so’m/kuniga",
      details: ["1+ yil tajriba", "O'rindoshlik ish", "Andijon shaxri"],
      authorImg: "authorImg3.png",
      author: "Shohruhbek Salimov",
      date: "3 kun oldin",
      views: 789,
      authorImg: authorImg,
    },
    {
      id: 16,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 17,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
    {
      id: 18,
      title: "Dasturchi",
      price: "20 000 000 - 30 000 000 so’m/oyiga",
      details: ["3+ yil tajriba", "Uydan ishlash", "Buxoro shaxri"],
      authorImg: "authorImg4.png",
      author: "Nilufar To'xtayeva",
      date: "Bugun",
      views: 1024,
      authorImg: authorImg2,
    },
  ];

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [followedCourses, setFollowedCourses] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("UZ"); // Boshlang'ich til
  const [languages, setLanguages] = useState(["RU", "EN"]); // Dropdowndagi boshqa tillar
  const [isOpen, setIsOpen] = useState(false);
  const [signupSuccess, setSignUpSuccess] = useState("");

  const loadContextData = async () => {
    try {
      const userResponse = await axios.post(`${usersServerUrl}accounts/get-me/`);
      setIsAuthenticated(userResponse.data.status === 'ok');
    } catch (err) {
      console.error(err);
      setIsAuthenticated(false);
    }

    try {
      const productsResponse = await axios.get(`${eCommerseServerUrl}products/popular/`);
      if (productsResponse.data.status === "ok") {
        setProducts(productsResponse.data.results);
        console.log(productsResponse.data);
      }
    } catch (err) {
      console.error(err);
    }

    try {
      const categoriesResponse = await axios.get(`${eCommerseServerUrl}categories/list/`);
      if (categoriesResponse.data.status === "ok") {
        setCategories(categoriesResponse.data.results);
	console.log(categoriesResponse.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    let isMounted = true; // To prevent setting state on unmounted component

    const loadData = async () => {
      if (isMounted) {
        await loadContextData();
      }
    };

    loadData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [usersServerUrl]); // Ensure usersServerUrl is a dependency if it's dynamic

  return (
    <MyContext.Provider
      value={{
        products,
        newsList,
        documents,
        courses,
        isAuthenticated,
        setIsAuthenticated,
        followedCourses,
        setFollowedCourses,
        announcements,
        selectedLanguage,
        setSelectedLanguage,
        languages,
        setLanguages,
        isOpen,
        setIsOpen,
        signupSuccess,
        setSignUpSuccess,
        categories
        setLoginSuccess,
        loginSuccess,
        isAdmin,
        setIsAdmin,
        data,
        setData
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
