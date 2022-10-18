import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Charger {
    type: string;
    address: string;
    lat: number;
    long: number;
    image: string;
    name: string;
    voltage: number;
    amperage: number;
    description: string;
}

export interface ChargersState {
    chargers: Charger[];
}

const initialState: ChargersState = {
    chargers: [
        {
            type: "commercial",
            address: "1351 Test Street, Anytown, CA 90124",
            lat: 32.7514233,
            long: -117.3123596,
            image: "https://via.placeholder.com/150",
            name: "Test Charger",
            voltage: 240,
            amperage: 32,
            description: "This is a charger"
        }
    ],
};

export const chargersSlice = createSlice({
    name: 'chargers',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addCharger: (state, action: PayloadAction<Charger>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.chargers = [...state.chargers, action.payload];
        },
    },
});

export const {addCharger,} = chargersSlice.actions;

export default chargersSlice.reducer;
