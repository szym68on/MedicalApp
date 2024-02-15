function ButtonSection({ textBtn }) {
  return (
    <button className="mt-10 border border-lightBlue px-16 md:px-9 py-2 rounded-xl text-blue hover:bg-blue hover:text-white transition duration-300 ease-in-out">
      {textBtn}
    </button>
  );
}

export default ButtonSection;
