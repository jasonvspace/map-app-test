import {useSelector} from "react-redux";
import {selectChargers} from "../store";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { Charger } from "../store/slices/chargersSlice";

const ChargerList = () => {
    const {chargers} = useSelector(selectChargers);

    return <TableContainer>
        <Table variant='striped' colorScheme='gray'>
            <Thead>
                <Tr>
                    <Th></Th>
                    <Th>Type</Th>
                    <Th>Address</Th>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th isNumeric>Latitude</Th>
                    <Th isNumeric>Longitude</Th>
                    <Th isNumeric>Voltage</Th>
                    <Th isNumeric>Amperage</Th>
                </Tr>
            </Thead>
            <Tbody>
                {chargers.map((item: Charger, index: number) => (<Tr key={index}>
                    <Td><img src={item.image} alt="" /></Td>
                    <Td>{item.type}</Td>
                    <Td>{item.address}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.description}</Td>
                    <Td>{item.lat}</Td>
                    <Td>{item.long}</Td>

                    <Td>{item.voltage}</Td>
                    <Td>{item.amperage}</Td>
                </Tr>))}
            </Tbody>
        </Table>
    </TableContainer>;
}

export default ChargerList;