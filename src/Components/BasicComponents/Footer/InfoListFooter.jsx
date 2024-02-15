function InfoListFooter({ title, itemOne, itemTwo, itemThree, itemFour }) {
  return (
    <div className="flex flex-col jusitify-center items-center ">
      <h6 className="md:text-[20px] text-[1rem]">{title}</h6>
      <ul className="mt-5 flex flex-col gap-y-1 cursor-pointer mb-8 md:text-[18px] items-center text-[0.9rem]">
        <li>{itemOne}</li>
        <li>{itemTwo}</li>
        <li>{itemThree}</li>
        <li>{itemFour}</li>
      </ul>
    </div>
  );
}

export default InfoListFooter;
