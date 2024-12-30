import Security from "../settingsComponents/security";
import Settings from "../settingsComponents/settings";
import Appearance from "../settingsComponents/appearance";
import Notifications from "../settingsComponents/notifications";
import Private from "../settingsComponents/private";
import Subscriptions from "../settingsComponents/subscriptions";
function SettingsRightBar({ selectedOption }) {
  const renderContent = () => {
    switch (selectedOption) {
      case "creatorSubscriptions":
        return (
          <div className="  border-r border-[color:var(--border-primary)] w-[600px] h-[2000px]">
            <Subscriptions />
          </div>
        );
      case "security":
        return (
          <div className="  border-r border-[color:var(--border-primary)] w-[600px] h-[2000px]">
            <Security />
          </div>
        );
      case "private":
        return (
          <div className="  border-r border-[color:var(--border-primary)] w-[600px] h-[2000px]">
            <Private />
          </div>
        );
      case "notifications":
        return (
          <div className="  border-r border-[color:var(--border-primary)] w-[600px] h-[2000px]">
            <Notifications />
          </div>
        );
      case "appearance":
        return (
          <div className="  border-r border-[color:var(--border-primary)] w-[600px] h-[2000px]">
            <Appearance />
          </div>
        );
      case "settings":
        return (
          <div className="  border-r border-[color:var(--border-primary)] w-[600px] h-[2000px]">
            <Settings />
          </div>
        );

      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

export default SettingsRightBar;
