import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { themeContext } from '../context/DataContext';
import {UserDetailsContainer,
    UserDetailContent,
    DetailItem,
    GoBackButton} from './styledComponent.js'


export default function UserDetails() {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { lightTheme } = useContext(themeContext);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await res.json();
        setUserDetail(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [id]);

  const goBack = () => {
    navigate("/");
  };

  return (
    <UserDetailsContainer lightTheme={lightTheme}>
      <h1>User Details</h1>
      <div>
        {loading ? (
          <div className="loading-container">
            <Oval
              visible={true}
              height="60"
              width="60"
              color="#4fa94d"
              ariaLabel="oval-loading"
            />
          </div>
        ) : (
          <UserDetailContent>
            <DetailItem>Name: <span>{userDetail.name}</span></DetailItem>
            <DetailItem>Email: <span>{userDetail.email}</span></DetailItem>
            <DetailItem>Phone: <span>{userDetail.phone}</span></DetailItem>
            <DetailItem>Company: <span>{userDetail.company?.name}</span></DetailItem>
            <DetailItem>Website: <span>{userDetail.website}</span></DetailItem>
          </UserDetailContent>
        )}
      </div>
      <GoBackButton lightTheme={lightTheme} onClick={goBack}>
        Go Back
      </GoBackButton>
    </UserDetailsContainer>
  );
}
