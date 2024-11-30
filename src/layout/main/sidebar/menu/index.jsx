import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
import Button from "../../../../components/button";
import { Children } from "react";
import More from "./more";
function Menu() {


    return (
        <nav className="mt-0.5 mb-1 ">


            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className="flex items-center group py-[3px]">

                    {({ isActive }) => (
                        <div className={classNames("inline-flex items-center group-hover:bg-[#eff3f41a] p-3 rounded-full gap-5 transitions-colors", { "font-bold": isActive })}>

                            <div className="w-[26.25] h-[26.25] relative">
                                {
                                    menu.notification && (<span className="w-[18px] h-[18px] text-[11px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex justify-center items-center">{menu?.notification}</span>)
                                }
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <div className=" text-xl pr-4">
                                {menu.title}
                            </div>

                        </div>
                    )}
                </NavLink>


            ))}

            <More />

            <div className="py-4 w-[90%]"> <Button size={"large"}>Gönder</Button></div>


        </nav>
    )
}
export default Menu;
