import Button from "./button.jsx";

function Header() {
  return (
    <header className="pt-[7.6rem] lg:pt-[6.7rem] mob:pt-[55px]  px-[50px] tablet:px-[40px] mob:px-[15px] bg-blue-linear">
      <div className="max-w-[1440px] m-auto flex mob:flex-col mob:items-center mob:content-center mob:text-center justify-between gap-[20px]">
        <div className="mb-[49px] mob:mb-[20px]">
          <h1 className="mt-[85px] tablet:mt-[73px] mob:mt-[63px] font-rubik text-[3.198rem] tablet:text-[2.83rem] mob:text-[2.5rem]">
            Відчиняємо двері до освіченого майбутнього
          </h1>
          <p className="mt-[9px] mob:mt-[3px] text-[1.6rem]">
            Підтримка і розвиток унікальності кожної дитини - для майбутнього
            успіху
          </p>
          <div className="pt-[22px] flex items-center gap-[18px] mob:pt-[15px] mob:justify-center">
            <a href="#" className="bg-green p-[.9em] px-[2.7em] text-[1.6rem] shadow-[6px_6px_0px_0px_#243B75;] mob:text-[1.4rem] font-poppins font-semibold uppercase"
            >
              Діагностичне заняття
            </a>
          </div>
        </div>
        <img
          src="src/assets/headerGuy.png"
          className="max-w-[301px] my-[18px] object-contain tablet:max-w-[278px] mob:max-w-[]"
          alt=""
        />
      </div>
    </header>
  );
}
export default Header;
