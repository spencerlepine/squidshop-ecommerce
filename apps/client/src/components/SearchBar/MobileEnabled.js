import React, { useState, useEffect } from "react";
import SearchBar from './index';

const MobileEnabledSearchBar = ({ customStyles }) => {
  const [state, setState] = useState({
    mobileView: false
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 950
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  return (
    <>
      {mobileView && <SearchBar customStyles={customStyles} />}
    </>
  );
}

export default MobileEnabledSearchBar;
