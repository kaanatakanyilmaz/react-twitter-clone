import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
import Button from "../../../../components/button";
import { Children } from "react";
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

            <button className="flex items-center group py-[3px] ">


                <div className="inline-flex items-center group-hover:bg-[#eff3f41a] p-3 rounded-full gap-5 transitions-colors">

                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>

                            <path fill="#e7e9ea" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />

                        </svg>



                    </div>
                    <div className=" text-xl pr-4">
                        Daha Fazla
                    </div>

                </div>

            </button>

            <div className="py-4 w-[90%]"> <Button size={"large"}>Gönder</Button></div>


        </nav>
    )
}
export default Menu;
