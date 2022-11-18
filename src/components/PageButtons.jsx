import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { t } from "i18next"

const Buttons = styled.div`
   display: flex;
`
const ProfilePageTitle = styled.div`
   background-color: ${({ theme }) => theme.pageEndTitleColumnsBg};
   margin-left: 40px;
   margin-top: 5px;
   padding: 10px 20px;
   color: ${({ theme }) => theme.text};
   border: 2px solid rgb(213 204 204);
   border-bottom: 0;
   border-radius: 10px 10px 0px 0px;

   &: hover {
      background: #63dd63;
      transition: background 0.3s ease;
   }
`
const Line = styled.div`
   width: 100%;
   height: 2px;
   background-color: rgb(213 204 204);
`

const PageButtons = () => {
   return (
      <>
         <Buttons>
            <NavLink to="/profiles-table/">
               <ProfilePageTitle>{t("Profiles")}</ProfilePageTitle>
            </NavLink>
            <NavLink to="/profiles-table/profile-summary">
               <ProfilePageTitle>{t("Profile summary")}</ProfilePageTitle>
            </NavLink>
         </Buttons>
         <Line />
      </>
   )
}

export default PageButtons
