import React, { useEffect, useReducer, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { format } from 'date-fns'
import styled from 'styled-components'
import TelSvg from '../../img/tel.svg'
import EmailSvg from '../../img/email.svg'
import DownArrow from '../../img/down-arrow.svg'
import UpArrow from '../../img/up-arrow.svg'
import { Trans } from 'react-i18next'


const TableContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const Column = styled.div`
   flex-grow: 1;
`
const ColumnHeader = styled.div`
   background-color: ${({ theme }) => theme.pageEndTitleColumnsBg};
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 2px solid rgb(213 204 204);
   font-size: 16px;
   font-weight: bold;
   cursor: pointer;
`
const TableСell = styled.div`
   line-height: 20px;
   padding: 8px 15px;
   border: 1px solid rgb(213 204 204);
   color: ${({ theme }) => theme.text};
   background-color: ${({ theme }) => theme.tableCellBackground};
`
const WrapLink = styled.div`
   .my-link div:hover {
      background: #ffffff;
      transition: .3s;
   }
`

const TextRenderer = ({ value, id }) => {
   return (
      <WrapLink>
         <NavLink
            className="my-link"
            to={`/profile-summary/${id}`}>
            <TableСell>{value}</TableСell>
         </NavLink>
      </WrapLink>
   )
}

const StatusRenderer = ({ value }) => {
   let style
   (value === "Active") ? style = { color: 'green' }
      : (value === "Paused") ? style = { color: 'orange' }
         : style = { color: 'red' }
   return (
      <TableСell style={style}>
         <Trans defaults={value} i18nKey={value.toLowerCase()} />
      </TableСell>
   )
}

const DateRenderer = ({ value }) => {
   const formateDate = format(new Date(value), 'dd/MM/yyyy')
   return <TableСell>{formateDate}</TableСell>
}

const EmailRender = ({ value }) => {
   return <TableСell>
      <img src={EmailSvg} alt="email" style={{ marginRight: 10 }} />
      {value}
   </TableСell>
}

const TelNumberRender = ({ value }) => {
   return <TableСell>
      <img src={TelSvg} alt="tel number:" style={{ marginRight: 5 }} />
      {value}
   </TableСell>;
}

const ComponentRenderer = ({ data, id }) => {
   const RENDERERS_BY_TYPE = {
      TEXT: <TextRenderer {...data} id={id} />,
      STATUS: <StatusRenderer {...data} />,
      DATE: <DateRenderer {...data} />,
      EMAIL: <EmailRender {...data} />,
      TELNUMBER: <TelNumberRender {...data} />
   }
   return RENDERERS_BY_TYPE[data.type]
}

const sortCompare = (x, y, direction) => {
   return new Intl.Collator().compare.apply(
      null,
      direction === 'DESC'
         ? [y, x]
         : [x, y]
   )
}

const profileReducer = (state, { type, payload }) => {
   switch (type) {
      case 'init':
         return {
            ...state,
            data: payload.sort((x, y) => sortCompare(
               x.data[state.sort.column]['value'],
               y.data[state.sort.column]['value'],
               state.sort.direction
            ))
         }
      case 'sort':
         const newSortState = {
            column: payload,
            direction: state.sort.column !== payload ? 'ASC' : state.sort.direction === 'ASC' ? 'DESC' : 'ASC'
         }

         return {
            ...state,
            sort: newSortState,
            data: state.data.sort((x, y) => sortCompare(
               x.data[newSortState.column]['value'],
               y.data[newSortState.column]['value'],
               newSortState.direction
            ))
         }
      default:
         throw new Error()
   }
}


const ProfilesTable = ({ columns, data }) => {
   const [state, dispatch] = useReducer(profileReducer, {
      data: [],
      sort: {
         column: '0',
         direction: 'ASC'
      }
   })

   useEffect(() => {
      dispatch({ type: 'init', payload: data })
   }, [data])

   const sortHandle = useCallback((e) => {
      dispatch({ type: 'sort', payload: e.currentTarget.dataset.index })
   }, [])

   return (
      <TableContainer>
         {columns.map((column, columnIndex) => {
            return (
               <Column key={columnIndex}>
                  <ColumnHeader
                     data-index={columnIndex}
                     onClick={sortHandle}
                  >
                     <Trans defaults={column.title} i18nKey={column.title.toLowerCase().replace(' ', '_')} />
                     {(state.sort.column === columnIndex.toString() && state.sort.direction === "ASC") && (
                        <img
                           style={{ paddingLeft: 10 }}
                           src={DownArrow} alt="" />
                     )}
                     {(state.sort.column === columnIndex.toString() && state.sort.direction === "DESC") && (
                        <img
                           style={{ paddingLeft: 10 }}
                           src={UpArrow}
                           alt="" />
                     )}
                  </ColumnHeader>
                  {state.data.map((row, rowIndex) => {
                     const data = row.data.find(value => `${value.columnId}` === `${column.id}`)
                     return <ComponentRenderer key={rowIndex + 'ComponentRenderer'} data={data} id={row.id} />
                  })}
               </Column>
            )
         })}
      </TableContainer>
   )
}

export default ProfilesTable
