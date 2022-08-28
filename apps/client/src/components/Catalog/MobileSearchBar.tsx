import * as React from "react";
import SearchBar from './SearchBar';

type Props = {
  customStyles?: any;
}

const MobileEnabledSearchBar: React.FC<Props> = ({ customStyles }) => {
  const [state, setState] = React.useState({
    mobileView: false
  });

  const { mobileView } = state;

  React.useEffect(() => {
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
