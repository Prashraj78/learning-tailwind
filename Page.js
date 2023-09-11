import React, { useState } from 'react'

function Page() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <div className='p-28 ml-8'>
            <h3 className='font-semibold text-xl'> Privacy management center</h3>
                <p className='mt-5'>Exercise your privacy rights under local law. To make a request to our Data Protection Office, use the ‘Data subject request form’ tab. To opt out of specific data processing activities, please go to ‘Preferences’.</p>
                <p className='mt-4'>If your request relates to a rental car or taxi reservation, you may also receive a response from Yahyabooking.com. </p>
                <p className='mt-4'>For more information, or to exercise other rights, please take a look at our Yahyabooking.com Privacy Statement, the Yahyabooking.com Privacy Statement for Cars, the Yahyabooking.com Privacy Statement for Flight, and the Yahyabooking.com  Privacy Statement for Hotel. </p>
                <div className='mt-4'>
                    <h6>First name (s) <p className='text-red-600 inline-block'>*</p> </h6>
                    < input
                        className='border mt-2 h-[36px] border-black rounded w-[959px]'
                    />
                </div>
                <div className='mt-4'>
                    <h6>Last name (s) <p className='text-red-600 inline-block'>*</p> </h6>
                    < input
                        className='border mt-2 h-[36px] border-black rounded w-[959px]'
                    />
                </div>
                <div className='mt-4'>
                    <h6> Email address <p className='text-red-600 inline-block'>*</p> </h6>
                    < input
                        className='border mt-2 h-[36px] border-black rounded w-[959px]'
                    />
                </div>

                <div className='mt-4'>
                    <input
                        className='w-[959px] h-[36px] border border-[#F56700] pl-4 bg-[#F5670014] rounded'
                        value="We'll send an email to this address to verify your identity. "
                        readOnly />
                </div>
                <div className='mt-6'>
                    <h3 className='font-semibold'>Which of the following rights would you like to exercise?</h3>
                    <div className='mt-4'>
                        <div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="options"
                                    value="option1"
                                    checked={selectedOption === 'option1'}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                />
                                <label htmlFor="option1" className='font-medium'>Right of access to personal data </label><br />

                            </div>
                            <p className='ml-5 text-sm'>Get a copy of your personal data.</p>
                        </div>
                        <div className='mt-3'>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="options"
                                    value="option2"
                                    checked={selectedOption === 'option2'}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                />
                                <label htmlFor="option2">Right to be forgotten</label>


                            </div>
                            <p className='ml-5 text-sm'>Erase your personal data from our system.</p>
                        </div>
                        <div className='mt-3'>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="option3"
                                    name="options"
                                    value="option3"
                                    checked={selectedOption === 'option3'}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                />
                                <label htmlFor="option3">Unsubscribe from email marketing</label>
                            </div>
                            <p className='ml-5 text-sm'>Manage your subscription to our mailing lists.</p>
                        </div>
                        <div className='mt-3'>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="option4"
                                    name="options"
                                    value="option4"
                                    checked={selectedOption === 'option4'}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                />
                                <label htmlFor="option2">Right to object to data sharing with other companies in the Booking Holdings Inc. corporate group</label>
                            </div>
                            <p className='ml-5 text-sm'>Right to object to data sharing with other companies in the Booking Holdings Inc. corporate group</p>
                        </div>
                        <div className='mt-8'>
                            <button className='w-[121px] text-sm h-[23px] bg-[#006CE4] rounded text-white'>Submit request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
