function OpinionUser() {
  return (
    <p className="w-2/3 text-[0.75rem] md:text-[19px] text-white font-thin">
      “Our dedicated patient engagement app and web portal allow you to access
      information instantaneously (no tedeous form, long calls, or
      administrative hassle) and securely”
    </p>
  );
}

function InfoUser() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="">
        <img src="/images/person.png" alt="person"></img>
      </div>
      <div>
        <h6 className="text-[0.9rem] md:text-[22px] text-white">
          Edward Nevgate
        </h6>
        <p className="text-[0.75rem] md:text-[18px] text-white">
          Founder Circle
        </p>
      </div>
    </div>
  );
}

function ContainerUser() {
  return (
    <div className="mt-10 flex w-[80%] justify-between md:items-center mx-auto gap-x-5 pb-10">
      <InfoUser />
      <OpinionUser />
    </div>
  );
}

export default ContainerUser;
