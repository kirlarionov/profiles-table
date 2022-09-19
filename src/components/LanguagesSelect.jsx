import React, { useState, useCallback } from 'react'
import { t } from 'i18next'

const LanguagesSelect = ({ changeLanguage }) => {
   const [selectLang, setselectLang] = useState(localStorage.getItem("i18nextLng") || null)

   const change = useCallback(e => {
      changeLanguage(e.target.value)
      setselectLang(e.target.value)
   }, [changeLanguage])

   return (
      <>
         <label> {t("Change language")}
            <select value={selectLang} onChange={change}>
               <option value="en">EN</option>
               <option value="ru">RU</option>
            </select>
         </label>
      </>
   )
}

export default LanguagesSelect
