function TitleSection({ title }) {
  return (
    <h3 className="text-[1.5rem] md:text-titleSection text-center ">
      <span className="border-b-[1px] border-gray pb-3 border-opacity-20">
        {title}
      </span>
    </h3>
  );
}

export default TitleSection;
