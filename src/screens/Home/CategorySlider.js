import React, { useEffect, useState } from 'react';
import { Slider, Category } from './styled'

const CategorySlider = (props) => {
    const { array } = props
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const onlyUnique = (value, index, self) =>{
        return self.indexOf(value) === index;
    };

    const getCategories = () => {
        const filteredArray = categories.filter(onlyUnique)
        setFilteredCategories(filteredArray)
    };

      
    useEffect(() =>{
        const mapMenu =
        array.map((category) =>{   
            return category.category
        });
        setCategories([...mapMenu]);
    }, [array]);
        
    useEffect(()=>{
        getCategories()
    }, [categories]);

    const handleClick = (category) => {
        props.getCategory(category)
    }

    return (
        <Slider>
            {filteredCategories.map((category, index) => {
                return <Category key={index} onClick={() => handleClick(category)} currentCategory={props.currentCategory} this={category}>{category}</Category>
            })}
      </Slider>
    )
}
export default CategorySlider;
