import modals from "../routes/modals";
import { useModal } from "../store/modal/hooks";

function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name == modal.name);

  console.log("modal değeri", modal);

  return (
    <div className="fixed inset-0 bg-[color:var(--background-modal)] flex justify-center items-center z-20">
      {currentModal && <currentModal.component />}
    </div>
  );
}
export default Modal;
