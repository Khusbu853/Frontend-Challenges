import { useEffect, useState } from "react";
import { items } from "../utils/dummyData";

const MultiselectFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState([])
    const [filteredItems, setFilteredItems] = useState(items)
    const categoryArray = ["Watch", "Bag", "Electronics", "Camera"]

    const handleSelectedFilter = (categoryItem) => {
        if (selectedCategory.includes(categoryItem)) {
            setSelectedCategory(selectedCategory.filter(category => category !== categoryItem));
        } else {
            setSelectedCategory([...selectedCategory, categoryItem]);
        }
    };

    useEffect(() => {
        handleFilter();
    }, [selectedCategory]);

    const handleFilter = () => {
        if (selectedCategory.length > 0) {
            const filtered = items.filter((item) => selectedCategory.includes(item.category));
            setFilteredItems(filtered);
        } else {
            setFilteredItems(items);
        }
    };

    return (
        <div>
          <div className="container">
            {categoryArray.map((categoryItem, index) => (
                <button key={index} className={`singleItem btn-${selectedCategory.includes(categoryItem) ? 'selected' : ''}`}
                onClick={() => handleSelectedFilter(categoryItem)}>{categoryItem}</button>
            ))}
          </div>
          <div className="container">
            {filteredItems.map((item, index) => (
                <div key={index} className="singleItem">
                   <h4 className="my-2">{item.name}</h4>
                   <p>{item.category}</p>
                </div>
            ))}
          </div>
        </div>
        
    )
}

export default MultiselectFilter;