export function Cards(props: any) {
  const { cardContainer } = props;
  return (
    <div className="h-56 w-64 bg-gradient-to-b from-[#2b1f1f] to-[#1f0e2b] rounded-3xl p-0.5 drop-shadow-lg">
      <div className="h-full w-full bg-gradient-to-b from-[#201717] to-[#15091d] rounded-3xl  hover:duration-300">
        {cardContainer}
      </div>
    </div>
  );
}
