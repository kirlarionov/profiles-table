import React, { useState } from 'react'
import styled from 'styled-components'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const PAGE_WIDTH = 500

const MainWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 550px;
   height: 280px;
   margin: 15px auto;
`
const SliderWindow = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
`
const SliderBlock = styled.div.attrs()`
   display: flex;
   height: 100%;
   transform: translateX(${props => props.offset}px);
   transition: translate;
   transition-property: transform;
   transition-duration: 400ms;
   transition-timing-function: ease-in-out;
`
const SlideImg = styled.img`
   height: 100%;
   min-width: ${PAGE_WIDTH}px;
   max-width: ${PAGE_WIDTH}px;
`
const imgList = [
   'https://upload.wikimedia.org/wikipedia/commons/1/17/2018_Porsche_Cayenne_V8_Turbo_Tiptronic_4.0_Front.jpg',
   'https://cdn.motor1.com/images/mgl/n7Z0o/s3/2020-bmw-x5-m-rendering.jpg',
   'https://www.carscoops.com/wp-content/uploads/2020/06/audi-rs-q8-vorsprung-pack-for-sale-uk-36-1024x555.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/c/c4/2017_Mercedes-Benz_GLS_63_AMG_%28X_166%29_wagon_%282018-09-17%29_01.jpg',
   'https://autopro8.mediacdn.vn/zoom/600_315/2020/5/14/2020-rolls-royce-cullinan-black-badge-006-1589445196592129260698-crop-15894452243411180024940.jpg',
]

function Slider() {

   const [offset, setOffset] = useState(0)

   const handleLeftArrowClick = () => {
      setOffset(currentOffset => {
         const newOffset = currentOffset + PAGE_WIDTH
         return Math.min(newOffset, 0)
      })
   }

   const handleRightArrowClick = () => {
      setOffset(currentOffset => {
         const newOffset = currentOffset - PAGE_WIDTH
         const maxOffset = -(PAGE_WIDTH * (imgList.length - 1))
         return (newOffset === maxOffset + (-PAGE_WIDTH)) ? 0 : Math.max(newOffset, maxOffset)
      })
   }


   return (
      <MainWrapper>
         <FaChevronCircleLeft onClick={handleLeftArrowClick}
            style={{ cursor: 'pointer', width: '2em', height: '2em', visibility: `${!offset ? 'hidden' : 'visible'}` }} />
         <SliderWindow>
            <SliderBlock offset={offset}>
               {imgList.map((car, index) => <SlideImg src={car} alt="car" key={`${index}_Car`} />)}
            </SliderBlock>
         </SliderWindow>
         <FaChevronCircleRight onClick={handleRightArrowClick} style={{ cursor: 'pointer', width: '2em', height: '2em' }} />
      </MainWrapper>
   )
}

export default Slider
