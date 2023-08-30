import { createContext, useContext, useState } from "react";

const SelectedBandContext = createContext({
    selectedBand: 0,
    setSelectedBand: (band) => {},
});

export function SelectedBandProvider({ children }) {
    const [selectedBand, setSelectedBand] = useState('');

    return (
        // @ts-ignore
        <SelectedBandContext.Provider value={{ selectedBand, setSelectedBand }}>
            {children}
        </SelectedBandContext.Provider>
    );
}

export function useSelectedBand() {
    return useContext(SelectedBandContext);
}