function Dot() {
  return <div className="disActive-dot"></div>;
}
function BoxDot() {
  return (
    <div className="w-[100%] flex mt-5 items-center justify-center gap-x-16">
      <span className=" text-[1.5rem] md:text-[2rem] text-blue cursor-pointer translate-y-[-5px]">
        &#8592;
      </span>
      <div className="flex gap-x-3 items-center">
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
      <span className="text-[1.5rem] md:text-[2rem] text-blue cursor-pointer translate-y-[-5px]">
        &#8594;
      </span>
    </div>
  );
}

export default BoxDot;
