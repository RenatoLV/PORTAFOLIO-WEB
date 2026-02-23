import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedTag, setSelectedTag] = useState(null);

    const toggleTag = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null); // Clear filter if clicked again
        } else {
            setSelectedTag(tag);
        }
    };

    return (
        <FilterContext.Provider value={{ selectedTag, setSelectedTag, toggleTag }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};
