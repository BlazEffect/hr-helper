import * as React from 'react';
import {
    DateInput,
    Edit,
    NullableBooleanInput,
    TextInput,
    PasswordInput,
    SimpleForm,
    useTranslate,
} from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';

import Aside from './Aside';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentsInput';
import { validateForm } from './VisitorCreate';


// 
// 
// блок кода, отвечающий за редактирование данных страницы пользователя
// 
// 



const VisitorEdit = () => {
    const translate = useTranslate();
    return (
        <Edit title={<VisitorTitle />} aside={<Aside />}>
            <SimpleForm validate={validateForm}>
                <div>
                    <Grid container width={{ xs: '100%', xl: 800 }} spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.identity'
                                )}
                            </Typography>
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="имя"
                                        isRequired
                                        fullWidth
                                    />
                                </Box>
                                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="фамилия"
                                        isRequired
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                            <TextInput
                                type="email"
                                source="email"
                                isRequired
                                fullWidth
                            />
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <DateInput
                                        source="дата рождения"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={2} ml={{ xs: 0, sm: '0.5em' }} />
                            </Box>

                            <Box mt="1em" />

                            <Typography variant="h6" gutterBottom>
                                {/* заголовок "адрес" */}
                                {/* {translate(
                                    'resources.customers.fieldGroups.address'
                                )} */}
                            </Typography>
                            <TextInput
                                source="предполагаемая должность"
                                multiline
                                fullWidth
                                helperText={false}
                            />
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="номер телефона"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="пол"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={2}>
                                    <TextInput
                                        source="возраст"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                            </Box>

                            <Box mt="1em" />

                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.change_password'
                                )}
                            </Typography>
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <PasswordInput
                                        source="password"
                                        fullWidth
                                    />
                                </Box>
                                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                    <PasswordInput
                                        source="confirm_password"
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.stats'
                                )}
                            </Typography>

                            {/* <SegmentsInput fullWidth /> */}
                            <NullableBooleanInput
                                fullWidth
                                source="собеседование с hr-ом"
                            />
                            <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                                <TextInput
                                    source="заметка о собеседовании с hr-ом"
                                    fullWidth
                                    helperText={false}
                                />
                            </Box>


                            <NullableBooleanInput
                                fullWidth
                                source="собеседование с заказчиком"
                            />
                             <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                                <TextInput
                                    source="заметка о собеседовании с заказчиком"
                                    fullWidth
                                    helperText={false}
                                />
                            </Box>

                            <NullableBooleanInput
                                fullWidth
                                source="тестовое задание"
                            />
                             <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                                <TextInput
                                    source="заметка о тестовом задании"
                                    fullWidth
                                    helperText={false}
                                />
                            </Box>

                            <NullableBooleanInput
                                fullWidth
                                source="оффер"
                            />

                            <NullableBooleanInput
                                fullWidth
                                source="отказ заказчика"
                            />
                            <NullableBooleanInput
                                fullWidth
                                source="отказ рекрута"
                            />
                            
                        </Grid>
                    </Grid>
                </div>
            </SimpleForm>
        </Edit>
    );
};

const VisitorTitle = () => <FullNameField size="32" sx={{ margin: '5px 0' }} />;

export default VisitorEdit;