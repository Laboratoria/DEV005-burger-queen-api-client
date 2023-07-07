import React from 'react'
import ApiAdminUser  from '../../Utilities/ApiAdminUser';
import Header from "../../components/Header";
import TopBarAdmin from '../../components/topBarAdmin';

export const AdminEmployees = () => {
  return (
    <>
     <Header />
     <TopBarAdmin/>
    <ApiAdminUser/>
    </>
  )
}
export default AdminEmployees;