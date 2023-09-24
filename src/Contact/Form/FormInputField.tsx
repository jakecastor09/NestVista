const FormInputField = () => {
  return (
    <div className='lg:w-3/5'>
      <div className='mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 md:mt-8'>
        <div>
          <p>Your Name</p>
          <input
            type='text'
            placeholder='Your full name'
            className='border border-pryBlue rounded-lg p-4 w-full mt-2 placeholder:text-md focus:outline-pryBlue/10'
          />
        </div>
        <div>
          <p>Your Email</p>
          <input
            type='text'
            placeholder='example@gmail.com'
            className='border border-pryBlue rounded-lg p-4 w-full mt-2 placeholder:text-md focus:outline-pryBlue/10'
          />
        </div>
        <div>
          <p>Your Phone Number</p>
          <input
            type='text'
            placeholder='+0912387123'
            className='border border-pryBlue rounded-lg p-4 w-full mt-2 placeholder:text-md focus:outline-pryBlue/10'
          />
        </div>
        <div>
          <p>Your Subject</p>
          <input
            type='text'
            placeholder='Question'
            className='border border-pryBlue rounded-lg p-4 w-full mt-2 placeholder:text-md focus:outline-pryBlue/10'
          />
        </div>
      </div>
      <div className='mt-2'>
        <div>
          <p>Your Message</p>
          <textarea
            placeholder='Type Here'
            className='border border-pryBlue rounded-lg p-4 w-full mt-2 placeholder:text-md focus:outline-pryBlue/10 h-[140px]'
          />
        </div>
        <button className='mt-4 bg-pryGreen rounded-full py-4 text-lg text-white w-full md:w-40'>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default FormInputField;
