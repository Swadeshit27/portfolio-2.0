"use client"

import fileService from '@/appwrite/file'
import reviewService from '@/appwrite/reviews'
import InputField from '@/components/common/InputField'
import { ErrorMessage, Form, Formik } from 'formik'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import * as yup from 'yup'

const validateReview = yup.object().shape({
    name: yup.string().required('Name is required'),
    review: yup.string().required('Review is required').max(450, 'Review must be less than 450 characters').min(150, 'Review must be more than 150 characters'),
    position: yup.string().required('Position is required'),
    company: yup.string().required('Company/Organization is required'),
    linkedin: yup.string().url('Invalid URL').required('Linkedin URL is required'),
    photo: yup.mixed()
        .required('Photo is required')
        .test('fileSize', 'File size must be <1MB', (value: any) => {
            return value && value.size <= 1000000
        })
})


const Reviews = () => {
    const [loading, setLoading] = useState(false);

    const handelSubmit = async (values: IReviews, { resetForm }: any) => {
        try {
            setLoading(true);
            const photoUrl: any = await fileService.uploadFile(values.photo); 
            values.photo = photoUrl.$id;
            const res = await reviewService.createReview(values);
            toast.success('Thank you for your review. Your review will be published very soon.')
        } catch (error: any) {
            console.log('error', error);
            toast.error(error.message)
        } finally {
            setLoading(false);
            resetForm();
        }
    }

    return (
        <section className='p-4 xs:px-6 lg:px-0'>
            <div className='w-full max-w-3xl mx-auto min-h-[30rem] my-12 md:my-20 rounded-xl gradient p-0.5'>
                <div className='w-full h-full bg-black/80 backdrop-blur-md rounded-[10px] p-2.5 xs:p-4 md:p-8'>
                    <h1 className='text-lg xs:text-xl sm:text-2xl font-semibold text-center text-rose-500 mb-6'>
                        Share your experience with me
                    </h1>
                    <Formik
                        initialValues={{
                            name: '',
                            position: '',
                            company: '',
                            linkedin: '',
                            review: '',
                            photo: ''
                        }}
                        validationSchema={validateReview}
                        onSubmit={handelSubmit}
                    >{({ setFieldValue, values }) => (
                        <Form>
                            <InputField
                                label='Name'
                                name='name'
                                type='text'
                                placeholder='Enter your name'
                            />
                            <div className='flex max-sm:flex-col-reverse sm:items-center sm:justify-between my-4 mb-2'>
                                <div className='flex flex-col sm:space-y-2 max-sm:mt-3'>
                                    <label className='capitalize font-medium text-white opacity-85'>Upload your photo</label>
                                    <input
                                        type="file"
                                        name="photo"
                                        accept='image/*'
                                        onChange={(event) => {
                                            setFieldValue('photo', event.target.files ? event.target.files[0] : null)
                                        }
                                        }
                                    />
                                    <ErrorMessage component={'div'} name='photo' className="text-red-600 text-[12px] sm:text-sm" />
                                </div>
                                <div className='w-20 h-20 border border-gray-400 rounded-md'>
                                    {values.photo &&
                                        <Image
                                            src={URL.createObjectURL(values.photo as any)}
                                            alt="Photo"
                                            width={80}
                                            height={80}
                                            className='w-full h-full object-cover rounded-md'
                                        />
                                    }
                                </div>
                            </div>
                            <div className='grid sm:grid-cols-2 gap-4'>
                                <InputField
                                    label='Position'
                                    name='position'
                                    type='text'
                                    placeholder='Enter your position'
                                />
                                <InputField
                                    label='Company/Organization'
                                    name='company'
                                    type='text'
                                    placeholder='Enter your company/organization'
                                />
                            </div>
                            <InputField
                                label='Linkedin URL'
                                name='linkedin'
                                type='text'
                                placeholder='Enter your linkedin profile'
                            />
                            <InputField
                                label='Your Review'
                                isTextArea={true}
                                rows={5}
                                name='review'
                                type='text'
                                placeholder='Write your review'
                            />
                            <button
                                type='submit'
                                className={`btn !bg-violet-600 text-white hover:!bg-violet-500 hover:text-white border-none mt-4 ${loading && '!bg-violet-500 text-white'}`}
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default Reviews
