import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import RightBar from "./rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { useAppearance } from "../../store/appearance/hooks";
import { useEffect } from "react";

function MainLayout() {
  const modal = useModal();
  const appearance = useAppearance();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-alpha",
      appearance.backgroundColor.alpha
    );
    document.documentElement.style.setProperty(
      "--background-modal",
      appearance.backgroundColor.modal
    );
    document.documentElement.style.setProperty(
      "--background-likes",
      appearance.backgroundColor.likes
    );
    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );

    document.documentElement.style.setProperty(
      "--color-base",
      appearance.color.base
    );
    document.documentElement.style.setProperty(
      "--color-base-secondary",
      appearance.color.baseSecondary
    );
    document.documentElement.style.setProperty(
      "--color-logo",
      appearance.color.logo
    );
    document.documentElement.style.setProperty(
      "--hover-base",
      appearance.hover.base
    );
    document.documentElement.style.setProperty(
      "--hover-base-secondary",
      appearance.hover.baseSecondary
    );
    document.documentElement.style.setProperty(
      "--hover-base-account",
      appearance.hover.baseAccount
    );
    document.documentElement.style.setProperty(
      "--color-search",
      appearance.color.search
    );
    document.documentElement.style.setProperty(
      "--border-primary",
      appearance.borderColor.primary
    );
    document.documentElement.style.setProperty(
      "--font-Size",
      appearance.fontSize + "px"
    );
  }, [appearance]);

  return (
    <div className="w-[1265px] mx-auto flex">
      {modal && <Modal />}
      <SideBar />
      <main className="flex-1 flex gap-[30px]">
        <main className=" flex-1 max-w-[600px] border-x border-[color:var(--border-primary)] ">
          <Outlet>
            <SideBar />
          </Outlet>
        </main>
        <RightBar />
      </main>
    </div>
  );
}
export default MainLayout;
