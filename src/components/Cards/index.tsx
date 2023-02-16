export function Cards(props: any) {
  const { cardContainer } = props;
  return (
    <div className="h-64 w-72 bg-gradient-to-b from-[#F2F2F2] to-[#404040] rounded-3xl p-0.5 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]">
      <div className="h-full w-full bg-[#110415] rounded-3xl">
        {cardContainer}
      </div>
    </div>
  );
}
