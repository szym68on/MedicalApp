const serviceData = [
  {
    title: "Search doctor",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    icon: "/images/Frame.png",
  },
  {
    title: "Online pharmacy",
    text: "Buy  your medicines with our mobile application with a simple delivery system",
    icon: "/images/Frame(1).png",
  },
  {
    title: "Consultation",
    text: "Free consultation with our trusted doctors and get the best recomendations",
    icon: "/images/Frame(2).png",
  },
  {
    title: "Details info",
    text: "Free consultation with our trusted doctors and get the best recomendations",
    icon: "/images/Frame(3).png",
  },
  {
    title: "Emergency care",
    text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: "/images/Frame(4).png",
  },
  {
    title: "Tracking",
    text: "Track and save your medical history and health data ",
    icon: "/images/Frame(5).png",
  },
];

function ElementService({ path, title, text }) {
  return (
    <div className="pl-5 py-5 pb-11 rounded-xl shadow-lg pt-10 pr-5 h-full cursor-pointer hover:translate-y-[-10px] transition delay-100 ease-in">
      <div className="w-24 h-24 ">
        <img src={`${path}`} alt="icon-frame"></img>
      </div>
      <h4 className="text-[1.1rem] mt-3 h-12">{title}</h4>
      <p className="text-gray text-[0.9rem] mt-5 ">{text}</p>
    </div>
  );
}

function ContainerElementsServices() {
  return (
    <div className=" w-[90%] md:w-[80%] grid grid-cols-2 md:grid-cols-3 gap-y-5  gap-x-3 md:gap-x-5 mt-10 z-10">
      {serviceData.map((service, index) => (
        <ElementService
          key={index}
          path={service.icon}
          title={service.title}
          text={service.text}
        />
      ))}
    </div>
  );
}

export default ContainerElementsServices;
