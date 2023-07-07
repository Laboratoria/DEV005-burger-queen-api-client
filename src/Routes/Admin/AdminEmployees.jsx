import React from 'react'
import { ApiAdmin } from '../../Utilities/ApiAdmin';
import Header from "../../components/Header";
import TopBarAdmin from '../../components/topBarAdmin';

export const AdminEmployees = () => {
  return (
    <>
     <Header />
     <TopBarAdmin/>
    <ApiAdmin/>
    </>
  )
}
export default AdminEmployees;