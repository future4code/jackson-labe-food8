import React from 'react';
import { Slider, Category } from './styled'

const CategorySlider = (props) => {
    const { array } = props

    return (
        <Slider>
            {array.map((restau) => {
                return <Category key={restau.id}>{restau.category}</Category>
            })}
      </Slider>
    )
}
export default CategorySlider;