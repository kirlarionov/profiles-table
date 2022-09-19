import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { t } from 'i18next'

const NotFoundDiv = styled.div`
   .profile-link span {
      color: #4646eb;
      padding: 5px;
   }
   .profile-link span: hover {
      background-color: #eacbcb;
      border-radius: 5px;
   }
`

function NotFound() {

   return (
      <NotFoundDiv style={{ padding: 40, fontSize: 20, fontWeight: 'bold' }}
      > {t("Please select a profile in")}  → <NavLink className="profile-link" to="/"><span>{t("Profiles")}</span></NavLink>
      </NotFoundDiv>
   )
}

export default NotFound
