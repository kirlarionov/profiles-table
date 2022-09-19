import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      // we init with resources
      resources: {
         en: {
            translations: {
               "Toggle Theme": "Toggle Theme",
               "Change language": "Change language: ",
               "Loading": "Loading...",

               "Select columns": "Select columns",
               "Please select a profile in": "Please select a profile in",

               "Profile summary": "Profile summary",
               "Profiles": "Profiles",
               "Apply": "Apply",
               "Close": "Close",
               // Profile Summary:
               "Profile Summary Page": "Profile Summary Page",
               "General Info": "General Info",
               "Profile name": "Profile name:",
               "Name": "Name:",
               "Create date": "Create date:",
               "Phone number": "Phone number:",
               "Email": "Email:",
               "Adress": "Adress:",
               "Picture": "Picture:",
               // Profile column titles
               "profile_name": "Profile name",
               "profile_status": "Profile status",
               "create_date": "Create date",
               "email": "Email",
               "phone_number": "Phone number",
               // Profile status
               "active": "Active",
               "delete": "Delete",
               "paused": "Paused",
            }
         },
         ru: {
            translations: {
               "Toggle Theme": "Переключить тему",
               "Change language": "Выбрать язык: ",
               "Loading": "Загрузка...",

               "Select columns": "Выбрать столбцы",
               "Please select a profile in": "Пожалуйста, выберите профиль в",

               "Profile summary": "Информация профиля",
               "Profiles": "Профили",
               "Apply": "Применить",
               "Close": "Закрыть",
               // Profile Summary:
               "Profile Summary Page": "Страница информации профиля",
               "General Info": "Главная информация",
               "Profile name": "Имя профиля:",
               "Name": "Имя:",
               "Create date": "Дата создания:",
               "Phone number": "Номер телефона:",
               "Email": "Электр.почта:",
               "Adress": "Адрес:",
               "Picture": "Картинка:",
               // Profile column titles
               "profile_name": "Имя профиля",
               "profile_status": "Статус профиля",
               "create_date": "Дата создания",
               "email": "Email",
               "phone_number": "Номер телефона",
               // Profile status
               "active": "Активный",
               "delete": "Удалён",
               "paused": "Приостановлен",
            }
         }
      },
      fallbackLng: "en",
      debug: true,

      // have a common namespace used around the full app
      ns: ["translations"],
      defaultNS: "translations",

      keySeparator: false, // we use content as keys

      interpolation: {
         escapeValue: false
      }
   });

export default i18n
