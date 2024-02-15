function InfoMainSection() {
  return (
    <div className="md:w-[60%]">
      <div className="md:w-[50%]">
        <h2 className=" text-[2rem] md:text-titleBigPage md:leading-tight">
          Virtual healthcare for you
        </h2>
        <p className="text-gray font-light text-[0.9rem] mt-2">
          Medical provides progressive, and affordable healthcore, accessible on
          mobile and online for everyone
        </p>
        <button className="bg-blue text-white mt-3 md:mt-5 px-3 py-1 md:px-4 md:py-2 rounded-full text-[0.9rem] md:text-[1rem] hover:bg-lightBlue transition delay-75">
          Consult today
        </button>
      </div>
    </div>
  );
}

export default InfoMainSection;
