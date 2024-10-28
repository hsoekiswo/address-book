import React, { createContext, useState } from 'react';

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
    const [viewMode, setViewMode] = useState('list');

    return (
        <ViewContext.Provider value={{ viewMode, setViewMode }}>
            {children}
        </ViewContext.Provider>
    );
};