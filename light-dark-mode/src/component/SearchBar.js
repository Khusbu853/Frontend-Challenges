import { useEffect, useState, useCallback } from "react";
import { items } from "../utils/dummyData";

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

const SearchBar = () => {
    const [value, setValue] = useState("");
    const [searchedItem, setSearchedItem] = useState(items);

    const handleSearch = useCallback(() => {
        if (value.trim() === "") {
            setSearchedItem(items);
            return;
        }

        const lowercasedValue = value.toLowerCase();
        const newItems = items.filter(
            (item) =>
                item.name.toLowerCase().includes(lowercasedValue) ||
                item.category.toLowerCase().includes(lowercasedValue)
        );
        setSearchedItem(newItems);
        console.log("called");
    }, [value]);

    // debouncing
    const debouncedSearch = useCallback(debounce(handleSearch, 300), [handleSearch]);

    useEffect(() => {
        debouncedSearch();
    }, [value, debouncedSearch]);

    return (
        <div>
            <div className="searchDiv">
                <input
                    type="text"
                    value={value}
                    placeholder="search by name, category..."
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="container">
                {searchedItem.map((item, index) => (
                    <div key={index} className="singleItem">
                        <h4 className="my-2">{item.name}</h4>
                        <p>{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;

