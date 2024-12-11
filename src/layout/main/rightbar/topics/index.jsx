import { topic } from "../../../../utils/const";
import Topic from "./topic";
import explore from "../../../../pages/explore";
import { Link } from "react-router-dom";
function Topics() {
  return (
    <section className=" mb-4   border border-[#2f3336] rounded-2xl">
      <h5 className="  flex items-center text-[#e7e9ea] py-3 px-4  text-[20px] leading-6 font-bold">
        Neler oluyor?
      </h5>
      <div className="flex flex-col">
        {topic?.map((topics, index) => (
          <Topic item={topics} key={index} />
        ))}
      </div>
    </section>
  );
}
export default Topics;
