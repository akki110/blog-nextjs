const Contact = () => {
  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Enter subject",
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Enter your message",
      rows: 5,
    },
  ];

  return (
    <>
      <div className="w-full h-full flex justify-center flex-col items-center py-8 md:py-16 gap-5 md:gap-15">
        <div className="w-full md:w-9/12 flex justify-center flex-col items-center gap-5 px-5 md:px-0">
          <h5 className="text-surface dark:text-white text-sm md:text-md font-bold tracking-wider uppercase">
            Contact Us
          </h5>
          <h3 className="w-full md:w-6/12 text-center text-surface dark:text-white text-2xl md:text-4xl font-bold tracking-wide">
            Let's Start a Conversation
          </h3>
          <p className="w-full md:w-6/12 text-center text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. orem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Contact Us Form */}
        <div className="w-full md:w-9/12 flex flex-col gap-5 md:gap-10 px-5 md:px-0">
          {/* Timing and Address */}
          <div className="bg-purple grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-10">
            <div className="p-5">
              <h6 className="text-white/60 text-sm font-thin">Working Hours</h6>
              <hr className="w-full border border-white/20 my-5" />
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">Monday - Friday</p>
                <p className="text-white font-bold text-2xl">
                  9:00 AM - 6:00 PM
                </p>
                <p className="text-white/60 text-sm">
                  Our Support Team is available 24/7
                </p>
              </div>
            </div>
            <div className="p-5">
              <h6 className="text-white/60 text-sm font-thin">Contact Us</h6>
              <hr className="w-full border border-white/20 my-5" />
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">020 7993 2905</p>
                <p className="text-white/60 font-bold text-2xl">
                  support@mindspill.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <form action="">
              {inputFields.map((field, i) => (
                <div key={i} className="mb-3 w-full border border-gray-300">
                  {field.type == "textarea" ? (
                    <textarea
                      name={field.name}
                      id={field.name}
                      placeholder={field.placeholder}
                      cols={30}
                      rows={10}
                      className="w-full p-4 focus:outline-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full p-4 focus:outline-none"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full py-2 text-center bg-flame hover:bg-flame/80 cursor-pointer transition-all ease-in-out text-surface dark:text-white text-md md:text-xl font-bold tracking-wider"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
