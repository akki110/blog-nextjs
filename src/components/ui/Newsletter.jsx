import ReusableLink from "./ReusableLink";

const Newsletter = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col items-center py-8 md:py-16 gap-5 md:gap-8 ">
      <div className="w-full md:w-9/12 flex justify-center flex-col items-center gap-5 md:gap-8 px-5 md:px-0">
        <h3 className="w-full md:w-6/12 text-center text-surface dark:text-white text-xl md:text-3xl font-bold tracking-wider uppercase">
          Join our team to be a part of our story
        </h3>
        <p className="w-full md:w-6/12 text-center text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod. orem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod.
        </p>
        <ReusableLink href={"/about"} text={"Join Now"} />
      </div>
    </div>
  );
};

export default Newsletter;
