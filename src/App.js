import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import ProfilesPage from "./components/Profiles/ProfilesPage"
import PageButtons from "./components/PageButtons"
import ProfileSummary from "./components/ProfileSummary"
import NotFound from "./components/NotFound"
import Slider from "./components/Slider"
import { lightTheme, darkTheme, toggleTheme } from "./Theme"
import { GlobalStyles } from "./GlobalStyles"
import LanguagesSelect from "./components/LanguagesSelect"
import { useTranslation, Trans } from "react-i18next"

const AppWrapper = styled.div`
   padding: 0 15px;
   width: 1030px;
   height: 100vh;
   margin: 0 auto;
   background-color: ${({ theme }) => theme.mainBackground};
   font-size: 14px;
   font-family: Arial, Helvetica, sans-serif;
`
const TopHeader = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding-top: 8px;
`
const ThemeButton = styled.button`
   color: ${({ theme }) => theme.text};
   border: 1px solid black;
   border-radius: 8px;
   padding: 3px 5px;
   margin-right: 10px;
   background-color: ${({ theme }) => theme.buttonBackground};
   &:hover {
      background-color: rgb(213, 204, 204);
   }
`

function App() {
   const [theme, setTheme] = useState(
      localStorage.getItem("activeTheme") || "light"
   )

   const { i18n } = useTranslation()
   const changeLanguage = (lng) => i18n.changeLanguage(lng)

   return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
         <AppWrapper>
            <Router>
               <TopHeader>
                  <ThemeButton onClick={() => toggleTheme(theme, setTheme)}>
                     <Trans i18nKey={"Toggle Theme"} />
                  </ThemeButton>
                  <GlobalStyles />
                  <LanguagesSelect changeLanguage={changeLanguage} />
               </TopHeader>
               <PageButtons />
               <Switch>
                  <Route
                     exact
                     path="/profiles-table/"
                     component={ProfilesPage}
                  />
                  <Route
                     path="/profiles-table/profile-summary/:userId"
                     component={ProfileSummary}
                  />
                  <Route
                     exact
                     path="/profiles-table/profile-summary"
                     component={NotFound}
                  />
               </Switch>
            </Router>
            <Slider />
         </AppWrapper>
      </ThemeProvider>
   )
}

export default App
