import React from 'react';
import './App.css';
import ChargerList from './components/ChargerList';
import AddChargerModal from './components/AddChargerModal';
import Map from './components/Map';
import { Button, useDisclosure, Box, VStack } from "@chakra-ui/react";
import { Charger, addCharger } from './store/slices/chargersSlice';
import { useAppDispatch } from './store/hooks';

const App = () => {
    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onSubmitCharger = (values: Charger) => {
        dispatch(addCharger(values));
        onClose();
    }

    return (
        <Box h="100vh">
            <Map />
            <VStack p={5} h="50vh" alignItems="flex-start">
                <Button onClick={onOpen} colorScheme="teal">Add Charger</Button>
                <Box w="100%" flex={1} overflowY="auto">
                    <ChargerList/>
                </Box>
            </VStack>
            <AddChargerModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmitCharger} />
        </Box>
    );
}

export default App;
