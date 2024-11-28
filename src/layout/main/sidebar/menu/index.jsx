import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
function Menu() {

    
    return (
        <nav className="mt-0.5 mb-1 ">


            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className="flex items-center group ">

                    {({ isActive }) => (
                        <div className={classNames("inline-flex items-center group-hover:bg-[#eff3f41a] p-3 rounded-full gap-5 transitions-colors", { "font-bold": isActive })}>

                            {!isActive && menu.icon.passive}

                            {isActive && menu.icon.active}
                            <div className=" text-xl pr-4">
                                {menu.title}
                            </div>

                        </div>
                    )}
                </NavLink>

            ))}


        </nav>
    )
}
export default Menu;
