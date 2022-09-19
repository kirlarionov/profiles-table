import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { format } from 'date-fns'
import { t } from 'i18next'


const GeneralInfoWrap = styled.div`
   background-color: ${({ theme }) => theme.tableCellBackground};
   border: 2px solid rgb(213 204 204);
   border-radius: 20px;
   margin: 25px 40px;
   width: 400px;
   height: 400px;
   padding: 15px;
`
const InfoTitle = styled.h1`
   display: inline-block;
   font-size: 24px;
   margin-left: 20px;
   margin-top: 10px;
   border-bottom: 2px solid black;
`
const InfoList = styled.div`
   padding: 20px 15px;
`
const Li = styled.li`
   display: block;
   font-size: 16px;
   line-height: 20px;
   margin-bottom: 10px;
      & span {
         font-weight: bold;
         padding-right: 10px;
      } 
`
const PageName = styled.div`
      font-size: 18px;
      padding: 15px 15px 0;
`

const ProfileSummary = ({ test }) => {
   console.log(test)
   const { userId } = useParams()
   const baseUrl = 'https://61814fdd32c9e20017804772.mockapi.io/api/testdb'

   const [userInfo, setUserInfo] = useState([])
   const [otherInfo, setOtherInfo] = useState([])

   useEffect(() => {
      axios.get(`${baseUrl}/data/${userId}`)
         .then(response => {
            const respData = response.data;
            const [name, status, date, email, number] = respData.data.map(data => data.value)
            setUserInfo({ name, status, date, email, number })
         })
   }, [userId])

   useEffect(() => {
      axios.get(`${baseUrl}/data/${userId}/info`)
         .then(response => {
            const respData = response.data;
            const newRespData = Object.entries(respData[0])
            const [createdAt, name, picture, country, id] = newRespData.map(value => value[1])
            setOtherInfo({ createdAt, name, picture, country, id })
         })
   }, [userId])

   const formateDate = (otherInfo.createdAt) ? format(new Date(otherInfo.createdAt), 'dd/MM/yyyy') : null


   return (
      <>
         <PageName>{t("Profile Summary Page")}</PageName>
         <GeneralInfoWrap>
            <InfoTitle>{t("General Info")}</InfoTitle>
            <InfoList>
               <ul>
                  <Li><span>{t("Profile name")}</span>{userInfo.name}</Li>
                  <Li><span>{t("Name")}</span>{otherInfo.name}</Li>
                  <Li><span>{t("Create date")}</span>{formateDate}</Li>
                  <Li><span>{t("Phone number")}</span>{userInfo.number}</Li>
                  <Li><span>{t("Email")}</span>{userInfo.email}</Li>
                  <Li><span>{t("Adress")}</span>{otherInfo.country}</Li>
                  <Li><span>{t("Picture")}</span><img
                     src={otherInfo.picture}
                     width="180"
                     alt=""
                  /></Li>
               </ul>
            </InfoList>
         </GeneralInfoWrap>
      </>
   )
}

export default ProfileSummary

