import Tab from "../../components/tab";
import Foryou from "./foryou";

export default function Home() {
  return (
    <>
      <Tab activeTab="for-you">
        <Tab.Items>
          <Tab.Item id="for-you">Sana özel</Tab.Item>

          <Tab.Item id="followings">Takip edilenler</Tab.Item>
        </Tab.Items>
        <Tab.Content id="for-you">
          <Foryou />
        </Tab.Content>

        <Tab.Content id="followings">2.content</Tab.Content>
      </Tab>
    </>
  );
}
