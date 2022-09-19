import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProfilesTable from './ProfilesTable'
import ModalWindow from '../ModalWindow'
import axios from 'axios'
import { Trans } from "react-i18next"


const SelectColums = styled.button`
padding: 5px 10px;
border: 1px solid #575555;
border-radius: 10px;
margin: 7px 15px;
color: ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.buttonBackground};

   &:hover {
      background-color: rgb(213, 204, 204);
   }
`
const Loading = styled.div`
   font-size: 24px;
   padding: 40px;
   font-weight: bold;
`

const baseUrl = 'https://61814fdd32c9e20017804772.mockapi.io/api/testdb';
const savedActiveColumns = localStorage.getItem('activeColumns')

const ProfilesPage = () => {

   const [columns, setColumns] = useState([])
   const [activeColumns, setActiveColumns] = useState({})
   const [data, setData] = useState([])
   const [openModal, setOpenModal] = useState(false)

   useEffect(() => {
      Promise.all([
         axios.get(`${baseUrl}/columns-new`),
         axios.get(`${baseUrl}/data`)
      ]).then(([columnsResponse, dataResponse]) => {
         setColumns(columnsResponse.data)
         setData(dataResponse.data)
         setActiveColumns(savedActiveColumns ? JSON.parse(savedActiveColumns) : columnsResponse.data.reduce((prevValue, currentValue) => ({
            ...prevValue,
            [currentValue.id]: true
         }), {}))
      })
   }, [])

   if (!columns.length || !data.length) {
      return <Loading><Trans i18nKey={"Loading"} /></Loading>
   }


   return (
      <>
         <SelectColums
            onClick={() => setOpenModal(true)} ><Trans i18nKey={"Select columns"} /></SelectColums>
         {openModal && <ModalWindow
            setOpenModal={setOpenModal}
            columns={columns}
            activeColumns={activeColumns}
            setActiveColumns={setActiveColumns} />}
         <ProfilesTable columns={columns.filter(column => activeColumns[column.id])} data={data} />
      </>
   )
}

export default ProfilesPage
