import React from 'react';
import { Modal, Box, Typography, TextField, Button as MUIButton } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
});

const NewListModal = ({ isOpen, onClose, onSubmit }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '4px solid #214284',
                    boxShadow: 24,
                    p: 4,
                    borderRadius:2,
                    
                }}
            >
                <Typography variant="h6" component="h2" gutterBottom>
                    Add New List
                </Typography>
                <Formik
                    initialValues={{ name: '', description: '' }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-4">
                                <Field
                                    as={TextField}
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    error={errors.name && touched.name}
                                    helperText={errors.name && touched.name ? errors.name : null}
                                />
                            </div>
                            <div className="mb-4">
                                <Field
                                    as={TextField}
                                    name="description"
                                    label="Description"
                                    fullWidth
                                    error={errors.description && touched.description}
                                    helperText={errors.description && touched.description ? errors.description : null}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <MUIButton
                                    variant="contained"
                                    color="secondary"
                                    onClick={onClose}
                                >
                                    Cancel
                                </MUIButton>
                                <MUIButton type="submit" variant="contained" color="primary">
                                    Save
                                </MUIButton>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
    );
};

export default NewListModal;
