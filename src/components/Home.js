import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import noUserImg from '../assets/noUser.jpeg';
import { DataContext, themeContext } from "../context/DataContext";
import { HomeContainer,
SearchSortContainer,
SearchBar,
SearchInput,
SortDropdown,
UserList,
UserCard,
FailureContainer} from './styledComponent.js'
import '../css/Home.css'

export default function Home() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const { list, apiStatus } = useContext(DataContext);
  const { lightTheme } = useContext(themeContext);

  const filteredList = list.filter(item => (
    item.name.toLowerCase().includes(search.toLowerCase())
  ));

  const sortedList = filteredList.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name); 
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div>
      <HomeContainer lightTheme={lightTheme}>
        <SearchSortContainer>
          <SearchBar>
            <SearchInput
              type="search"
              placeholder="Search by name"
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
              lightTheme={lightTheme}
            />
          </SearchBar>
          <SortDropdown value={sortOrder} onChange={(e) => { setSortOrder(e.target.value) }} lightTheme={lightTheme}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </SortDropdown>
        </SearchSortContainer>
        {apiStatus === "loading" && 
          <div className="loading-container">
            <Oval
              visible={true}
              height="60"
              width="60"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }

        {apiStatus === "success" && 
          <UserList>
            {sortedList.length === 0 ? (
              <FailureContainer lightTheme={lightTheme}>
                <img src={noUserImg} alt="no user" />
                <h3>No Users Found</h3>
              </FailureContainer>
            ) : (
              sortedList.map((item) => (
                <Link to={`/users/${item.id}`} key={item.id} className="link">
                  <UserCard lightTheme={lightTheme} >
                    <p className="user-name">Name: <span className="link">{item.name}</span></p>
                    <p >Email: <span>{item.email}</span></p>
                    <p>City: <span>{item.address.city}</span></p>
                  </UserCard>
                </Link>
              ))
            )}
          </UserList>
        }

        {apiStatus === "failure" && 
          <FailureContainer lightTheme={lightTheme}>
            <img src={noUserImg} alt="no user" />
            <h3>Sorry, No User Found</h3>
          </FailureContainer>
        }
      </HomeContainer>
    </div>
  );
}
