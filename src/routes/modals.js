import ChatRoom from "../modals/chatroom";
import Comment from "../modals/comment";
import PremiumModal from "../modals/premium-modal";
import View from "../modals/view";
import VerifiedModal from "../modals/verified-modal";
import Works from "../modals/works";

const modals = [
  {
    name: "chatroom",
    component: ChatRoom,
  },
  {
    name: "comment",
    component: Comment,
  },
  {
    name: "view",
    component: View,
  },
  {
    name: "premium",
    component: PremiumModal,
  },
  {
    name: "verifiedmodal",
    component: VerifiedModal,
  },
  {
    name: "isler",
    component: Works,
  },
];

export default modals;
