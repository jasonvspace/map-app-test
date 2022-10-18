import {FC} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    HStack,
    Grid,
    GridItem,
    Textarea
} from '@chakra-ui/react';
import {useFormik} from "formik";
import {Charger} from '../store/slices/chargersSlice';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: Charger) => void;
}

const initialValues: Charger = {
    type: 'residental',
    address: '',
    lat: 0,
    long: 0,
    image: '',
    name: '',
    voltage: 0,
    amperage: 0,
    description: ''
};

const AddChargerModal: FC<Props> = ({isOpen, onClose, onSubmit}) => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            onSubmit(values);
            formik.resetForm();
        },
    })

    return <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay/>
        <ModalContent>
            <form onSubmit={formik.handleSubmit}>
                <ModalHeader>Add Charger</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Grid gap={2}>
                        <GridItem colSpan={12}>
                            <RadioGroup name="type" value={formik.values.type}>
                                <HStack>
                                    <Radio value='residental' onChange={formik.handleChange}>Residental</Radio>
                                    <Radio value='commercial' onChange={formik.handleChange}>Commercial</Radio>
                                    <Radio value='vacation' onChange={formik.handleChange}>Vacation</Radio>
                                </HStack>
                            </RadioGroup>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormControl>
                                <FormLabel htmlFor="address">Address</FormLabel>
                                <Input
                                    id="address"
                                    name="address"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormControl>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <FormControl>
                                <FormLabel htmlFor="image">Image Url</FormLabel>
                                <Input
                                    id="image"
                                    name="image"
                                    onChange={formik.handleChange}
                                    value={formik.values.image}
                                    required
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <FormControl>
                                <FormLabel htmlFor="description">Description</FormLabel>
                                <Textarea
                                    id="description"
                                    name="description"
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormControl>
                                <FormLabel htmlFor="lat">Latitude</FormLabel>
                                <Input
                                    id="lat"
                                    name="lat"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.lat}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormControl>
                                <FormLabel htmlFor="long">Longitude</FormLabel>
                                <Input
                                    id="long"
                                    name="long"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.long}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormControl>
                                <FormLabel htmlFor="voltage">Voltage</FormLabel>
                                <Input
                                    id="voltage"
                                    name="voltage"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.voltage}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormControl>
                                <FormLabel htmlFor="amperage">Amperage</FormLabel>
                                <Input
                                    id="amperage"
                                    name="amperage"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.amperage}
                                />
                            </FormControl>
                        </GridItem>
                    </Grid>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} type="submit">
                        Add
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Close</Button>
                </ModalFooter>
            </form>
        </ModalContent>
    </Modal>
}

export default AddChargerModal;