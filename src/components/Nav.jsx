function Nav() {
  return (
    <div className="bg-white-100 fixed w-[100vw] px-[50px]">
    <nav className="navCss flex max-w-[1440px] m-auto items-center justify-between h-[7.6rem]">
      <img src="src/assets/icon.png" className="h-[117px] w-[117px] translate-y-[30%]" alt="" />
      <ul >
        <li>
          <a href="">Головна</a>
        </li>
        <li>
          <a href="">Послуги та вартість</a>
        </li>
        <li>
          <a href="">Марафони</a>
        </li>
        <li>
          <a href="">Відгуки</a>
        </li>
        <li className="relative">
          <a href="">
            Інформація для батьків <img src="" alt="" />
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
    </nav>
    </div>
  );
}
export default Nav;
