import Foryou from "./for-you";
import Topics from "./topics";
import News from "./news";
import Sport from "./sport";
import Entertainment from "./entertainment";
import Tab from "../../components/tab";

function Explore() {
  return (
    <>
      <Tab activeTab="for-you">
        <Tab.Items>
          <Tab.Item id="for-you">Sana özel</Tab.Item>

          <Tab.Item id="topics">Gündemdekiler</Tab.Item>
          <Tab.Item id="news">Haberler</Tab.Item>
          <Tab.Item id="sport">Spor</Tab.Item>
          <Tab.Item id="entertainment">Eğlence</Tab.Item>
        </Tab.Items>
        <Tab.Content id="for-you">
          <Foryou />
        </Tab.Content>
        <Tab.Content id="topics">
          <Topics />
        </Tab.Content>
        <Tab.Content id="news">
          <News />
        </Tab.Content>
        <Tab.Content id="sport">
          <Sport />
        </Tab.Content>
        <Tab.Content id="entertainment">
          <Entertainment />
        </Tab.Content>
      </Tab>
    </>
  );
}
export default Explore;
