import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Footer from "./Footer";
axios.defaults.withCredentials = true;
const SharedLayout = () => {
  // const { authPrivateDataUrl, setUser, setIsLoggedIn, isLoggedIn } =
  //   useAuthStore();
  // useEffect(() => {
  //   userLoggedIn();
  // }, []);

  // console.log(isLoggedIn);
  // // Check if the user is logged in
  // const userLoggedIn = async () => {
  //   const res = await axios
  //     .get(authPrivateDataUrl, {
  //       withCredentials: true,
  //     })
  //     .catch((err) => {
  //       setIsLoggedIn(false);
  //       console.log(err, err?.response?.data);
  //     });

  //   if (res) {
  //     const data = await res?.data;
  //     console.log(data);
  //     setIsLoggedIn(true);
  //     setUser(data);
  //   }
  // };

  return (
    <>
      {/* <Nav /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default SharedLayout;
