export const BalanceCard = (props) => {
  const { ammount } = props;
  return (
    <div className="card w-[384px] bg-[url('/Large.png')] shadow-xl">
      <div className="card-body h-[216px] justify-between">
        <div className="card-title">
          <img src="/cardl.png" alt="logo" />
          <p className="text-white">Geld</p>
        </div>
        <div className="justify-end">
          <p className="text-slate-400">Cash</p>
          <p className="font-semibold text-white text-[23px]">{ammount}</p>
        </div>
      </div>
    </div>
  );
};
