import { useState } from "react";
import Button from "./button.jsx";
function Nav() {
  //for menu icon
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);

    document.querySelector("#root").classList.toggle("rootMoved");
  };

  return (
    <div className="navC bg-white-100 fixed w-[100vw] px-[50px] z-10 tablet:px-[40px] mob:px-[15px]">
      <nav className="navCss flex max-w-[1440px] m-auto items-center justify-between h-[7.6rem] lg:h-[6.7rem] lg:text-[16px] mob:h-[55px]">
        <img
          src="src/assets/icon.png"
          className="h-[117px] aspect-square translate-y-[30%] lg:h-[81px] lg:translate-y-[35%] mob:h-[59px] mob:translate-y-[40%]"
          alt=""
        />
        <ul>
          <li>
            <a href="#main">Головна</a>
          </li>
          <li>
            <a href="#poslugi">Послуги та вартість</a>
          </li>
          <li>
            <a href="#marafon">Марафони</a>
          </li>
          <li>
            <a href="#vidguki">Відгуки</a>
          </li>
          <li className="group hidden">
            <a href="#" className="flex gap-[8px] cursor-pointer">
              Інформація для батьків
              <img
                className="group-hover:rotate-[180deg] duration-[400ms]"
                src="src/assets/navArr.svg"
                alt=""
              />
            </a>
            <ul className="secondNavUl absolute">
              <li>
                <a href="">Дошкільнятам</a>
              </li>
              <li>
                <a href="">Початкова школа</a>
              </li>
              <li>
                <a href="">Англійська мова</a>
              </li>
              <li>
                <a href="">Матеріали для дому</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="mobMenu">
          <div
            className={isActive ? " nav-icon closed" : "nav-icon"}
            onClick={handleClick}
          >
            <div></div>
          </div>
          <ul>
          <li>
            <a href="#main">Головна</a>
          </li>
          <li>
            <a href="#poslugi">Послуги та вартість</a>
          </li>
          <li>
            <a href="#marafon">Марафони</a>
          </li>
          <li>
            <a href="#vidguki">Відгуки</a>
          </li>
            <li className="group hidden">
              <a  className="flex gap-[8px]">
                Інформація для батьків
                <img
                  className="group-hover:rotate-[180deg] duration-[400ms]"
                  src="src/assets/navArr.svg"
                  alt=""
                />
              </a>
              <ul className="secondNavUl absolute">
                <li>
                  <a href="#">Дошкільнятам</a>
                </li>
                <li>
                  <a href="">Початкова школа</a>
                </li>
                <li>
                  <a href="">Англійська мова</a>
                </li>
                <li>
                  <a href="">Матеріали для дому</a>
                </li>
              </ul>
            </li>
              <Button />
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
