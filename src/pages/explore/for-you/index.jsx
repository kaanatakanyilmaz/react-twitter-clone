import { topic } from "../../../utils/const";
import Content from "./content";
export default function Foryou() {
  return (
    <div>
      {topic.map((topics, index) => (
        <Content item={topics} key={index}></Content>
      ))}
    </div>
  );
}
