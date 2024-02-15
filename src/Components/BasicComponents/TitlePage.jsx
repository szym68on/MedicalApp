function TitlePage({ bgColor, titleColor = "titleColor", logoTitle }) {
  return (
    <div className="flex gap-x-1 items-center ">
      <p
        className={`bg-${bgColor} px-3 py-2 rounded-full flex items-center justify-center text-${logoTitle}`}
      >
        <span className="translate-y-[-1px] text-navText">M</span>
      </p>
      <h1 className={`text-navText md:text-titlePage text-${titleColor}`}>
        Medicine
      </h1>
    </div>
  );
}

export default TitlePage;
