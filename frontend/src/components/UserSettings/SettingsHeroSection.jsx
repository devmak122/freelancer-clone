import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SettingsHeroSection = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City / Town is required'),
    zip: Yup.string().required('ZIP / Postal Code is required'),
    state: Yup.string().required('State / Region is required'),
    country: Yup.string().required('Country is required'),
    company: Yup.string(),
    timeZone: Yup.string().required('Time Zone is required'),
    location: Yup.string().required('Location is required'),
    language: Yup.string().required('Language is required'),
    phone: Yup.string().required('Security Phone Number is required'),
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile Details</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          zip: '',
          state: '',
          country: '',
          company: '',
          timeZone: '',
          location: '',
          language: 'English',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-600 mb-2">First Name</label>
              <Field name="firstName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Last Name</label>
              <Field name="lastName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 mb-2">Address</label>
              <Field name="address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">City / Town</label>
              <Field name="city" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">ZIP / Postal Code</label>
              <Field name="zip" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="zip" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">State / Region</label>
              <Field name="state" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Country</label>
              <Field name="country" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 mb-2">Company</label>
              <Field name="company" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Time Zone</label>
              <Field as="select" name="timeZone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option value="">Select Time Zone</option>
                {/* Add options as needed */}
              </Field>
              <ErrorMessage name="timeZone" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Location</label>
              <Field name="location" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Language Settings</label>
              <Field as="select" name="language" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option value="English">English</option>
                {/* Add options as needed */}
              </Field>
              <ErrorMessage name="language" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Security Phone Number</label>
              <Field name="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="col-span-2">
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200">Save Settings</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SettingsHeroSection;
