import { RecordsData } from "@/components/RecordsData";

export const RecordsCard = () => {
  const data = [
    { title: "Lending & Renting", amount: "- 1,000₮", when: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", when: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", when: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", when: "3 hours ago" },
    { title: "Lending & Renting", amount: "- 1,000₮", when: "3 hours ago" },
  ];
  return (
    <div className="card bg-white shadow-xl w-full">
      <div className="card-body justify-between">
        <div className="card-title">
          <p className="">Last Records</p>
        </div>
        <hr className="w-full left-0 top-10"></hr>
        <div className="flex flex-col gap-10">
          {data.map((item, index) => (
            <RecordsData
              key={index}
              title={item.title}
              amount={item.amount}
              when={item.when}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
