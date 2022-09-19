import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import CloseBtn from '../img/close.svg'

const ModalWrap = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1000;
   background: rgba(0, 0, 0, 0.6);
   display: flex;
   justify-content: center;
   align-items: flex-start;
   overflow-y: scroll;
   padding: 100px;
`
const ModalContent = styled.div`
   width: 100%;
   max-width: 400px;
   background-color: #f9f9f9;
   border-radius: 15px;
   padding-top: 10px;
   position: relative;
   box-shadow: 0 5px 15px black;
   font-size: 16px;
   line-height: 22px;
`
const CloseImg = styled.button`
   background: #ff0000;
   height: 30px;
   width: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   position: absolute;
   right: 7px;
   top: 7px;
   background: none;
   cursor: pointer;
   transition: .3s;
   outline: none;
   &:hover {
      transition: .3s;
      transform: rotate(180deg);
   }
`
const ModalHeader = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 10px;
   border-bottom: 1px solid #c2b9b9;
   font-size: 18px;
   color: #797878;
   margin-bottom: 15px;
`
const SeachInput = styled.input`
display: block;
   border: 2px solid gray;
   border-radius: 5px;
   width: 94%;
   line-height: 24px;
   padding-left: 10px;
   margin: 0 auto;
`
const ColumnsList = styled.div`
   width: 94%;
   margin-top: 12px;
   margin: 12px auto 0;


`
const ColumnTitleCell = styled.div`
   border: 1px solid #c2b9b9;
   padding: 7px;
`
const Checkbox = styled.input`
   margin-right: 10px;
   width: 16px;
   height: 16px;
`
const ModalFooter = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 10px 0;
`
const CloseButton = styled.button`
   padding: 5px 10px;
   border: 1px solid;
   border-radius: 7px;
   margin-right: 12px;
   font-size: 16px;
`
const ApplyButton = styled.button`
   background-color: #6cd86c;
   padding: 7px 12px;
   border: 1px solid;
   border-radius: 7px;
   margin-right: 12px;
   font-size: 16px;
`

const ModalWindow = ({ setOpenModal, columns, activeColumns, setActiveColumns }) => {

   const [_activeColumns, _setActiveColumns] = useState(activeColumns)

   const changeColumns = useCallback(e => {
      const id = e.currentTarget.dataset.value
      _setActiveColumns((prevState) => ({
         ...prevState,
         [id]: !prevState[id]
      }))
   }, [])

   const applyHandle = useCallback(() => {
      setActiveColumns(_activeColumns)
      setOpenModal(false)
      localStorage.setItem('activeColumns', JSON.stringify(_activeColumns))
   }, [_activeColumns, setActiveColumns, setOpenModal])


   const closeHandle = useCallback(() => {
      setOpenModal(false)
   }, [setOpenModal])

   return (
      <ModalWrap>
         <ModalContent>
            <CloseImg
               onClick={closeHandle}
            ><img src={CloseBtn} width="36" alt="" /></CloseImg>
            <ModalHeader>
               <h2><Trans i18nKey={"Select columns"} /></h2>
            </ModalHeader>
            <SeachInput type="text" placeholder="Search columns..." />
            <ColumnsList>
               {columns.map(column => {
                  return (
                     <ColumnTitleCell key={column.id + 'ModalColumnTitle'}>
                        <Checkbox
                           type="checkbox"
                           value={column.title}
                           checked={_activeColumns[column.id]}
                           onChange={changeColumns}
                           data-value={column.id}
                        /><Trans defaults={column.title} i18nKey={column.title.toLowerCase().replace(' ', '_')} />
                     </ColumnTitleCell>
                  )
               })}
            </ColumnsList>
            <ModalFooter>
               <ApplyButton onClick={applyHandle}><Trans i18nKey={"Apply"} /></ApplyButton>
               <CloseButton onClick={closeHandle}><Trans i18nKey={"Close"} /></CloseButton>
            </ModalFooter>
         </ModalContent>
      </ModalWrap>
   )
}

export default ModalWindow
