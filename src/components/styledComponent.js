import styled from "styled-components";

//Navbar.js
export const NavbarContainer = styled.nav`
  background-color: ${(props) => (props.lightTheme ? "#ffffff" : "#333333")};
  color: ${(props) => (props.lightTheme ? "#000000" : "#ffffff")};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavbarIcons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.lightTheme ? "#000000" : "#ffffff")};
  cursor: pointer;
  font-size: 24px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

//home.js

export const HomeContainer = styled.div`
  background-color: ${(props) => (props.lightTheme ? "#f4f4f4" : "#222222")};
  min-height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SearchSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchBar = styled.div`
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: ${(props) => (props.lightTheme ? "1px solid #ccc" : "1px solid #555")};
  background-color: ${(props) => (props.lightTheme ? "#fff" : "#333")};
  color: ${(props) => (props.lightTheme ? "#000" : "#fff")};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SortDropdown = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: ${(props) => (props.lightTheme ? "1px solid #ccc" : "1px solid #555")};
  background-color: ${(props) => (props.lightTheme ? "#fff" : "#333")};
  color: ${(props) => (props.lightTheme ? "#000" : "#fff")};

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const UserCard = styled.div`
  background-color: ${(props) => (props.lightTheme ? "#fff" : "#444")};
  color: ${(props) => (props.lightTheme ? "#000" : "#fff")};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: ${(props) =>
    props.lightTheme
      ? "0 2px 10px rgba(0, 0, 0, 0.1)"
      : "0 2px 10px rgba(255, 255, 255, 0.1)"};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.lightTheme
        ? "0 4px 20px rgba(0, 0, 0, 0.1)"
        : "0 4px 20px rgba(255, 255, 255, 0.1)"};
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  h3 {
    margin-top: 1rem;
    font-size: 20px;
    color: ${(props) => (props.lightTheme ? "#000" : "#fff")};
  }

  img {
    width: 100%;
    max-width: 200px;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;

    h3 {
      font-size: 18px;
    }
  }
`;


//UserDetail.js
export const UserDetailsContainer = styled.div`
  background-color: ${(props) => (props.lightTheme ? "#f4f4f4" : "#222222")};
  min-height: 80vh;
  padding: 2rem;
  color: ${(props) => (props.lightTheme ? "#000" : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const UserDetailContent = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => (props.lightTheme ? "white" : "#444444")};
  color: ${(props) => (props.lightTheme ? "#000000" : "#ffffff")};
  width: 600px;
  border-radius: 15px;
  height: auto;
  padding: 10px 20px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const DetailItem = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  margin: 0.5rem 0;

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const GoBackButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.lightTheme ? "#ffffff" : "#000000")};
  color: ${(props) => (props.lightTheme ? "#444444" : "#fff")};
  border: ${(props) => (props.lightTheme ? "1px solid black" : "1px solid white")};
  font-size: 12px;
  border-radius: 4px;
  margin-left: -500px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.lightTheme ? "grey" : "#333")};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`;
