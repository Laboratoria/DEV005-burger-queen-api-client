import React from 'react'
import ApiAdminUser  from '../../Utilities/ApiAdminUser';
import Header from "../../components/Header";
import TopBarAdmin from '../../components/topBarAdmin';
import CreateUserTable from '../../components/AddToEmployees'
import { useState } from 'react';

export const AdminEmployees = () => {
  const [refresh, setRefresh] = useState(false);

  const handleUserCreated = () => {
    setRefresh(!refresh);
  };
  return (
    <>
     <Header />
     <TopBarAdmin/>
     <ApiAdminUser refresh={refresh} />
      <CreateUserTable onUserCreated={handleUserCreated} />
    </>
  )
}
export default AdminEmployees;