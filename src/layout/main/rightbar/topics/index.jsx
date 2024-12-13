import { topic } from "../../../../utils/const";
import Topic from "./topic";
import explore from "../../../../pages/explore";
import { Link } from "react-router-dom";
function Topics() {
  return (
    <section className=" mb-4   border border-[#2f3336] rounded-2xl overflow-hidden">
      <h5 className="  flex items-center text-[#e7e9ea] py-3 px-4  text-[20px] leading-6 font-bold">
        Neler oluyor?
      </h5>
      <div className="flex flex-col">
        {topic?.map((topics, index) => (
          <Topic item={topics} key={index} />
        ))}

        <Link
          to="trends"
          className="text-[#1d9bf0] hover:bg-white/[0.03] h-[52px] flex items-center  text-[15px]  px-4"
        >
          Daha fazla göster
        </Link>
      </div>
    </section>
  );
}
export default Topics;
