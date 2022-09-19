export const lightTheme = {
   body: '#E2E2E2',
   text: '#363537',
   toggleBorder: '#FFF',
   gradient: 'linear-gradient(#39598A, #79D7ED)',
   mainBackground: 'rgb(239, 238, 238)',
   buttonBackground: 'white',
   tableCell: 'black',
   tableCellBackground: 'rgb(239, 238, 238)',
   pageEndTitleColumnsBg: 'rgb(234, 231, 231)',
}

export const darkTheme = {
   body: '#363537',
   text: '#FAFAFA',
   toggleBorder: '#6B8096',
   gradient: 'linear-gradient(#091236, #1E215D)',
   mainBackground: '#212020',
   buttonBackground: '#8b8585',
   tableCellBackground: 'rgb(21, 20, 20)',
   pageEndTitleColumnsBg: 'rgb(58, 55, 55)',
}

export const toggleTheme = (theme, setTheme) => {
   if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('activeTheme', 'dark')
   } else {
      setTheme('light')
      localStorage.setItem('activeTheme', 'light')
   }
}