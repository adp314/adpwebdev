export function Cards(props: any) {
  const { cardContainer } = props;
  return (
    <div className="h-56 w-64 bg-gradient-to-b from-[#575757b9] to-[#1b1b1bf3] rounded-3xl p-0.5 drop-shadow-lg">
      <div className="h-full w-full bg-gradient-to-bl from-[#24201e] to-[#190b22] rounded-3xl  hover:duration-300">
        {cardContainer}
      </div>
    </div>
  );
}
