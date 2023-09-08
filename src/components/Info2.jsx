import Button from "./button.jsx";
function Info2(){
    return(
        <section className="relative max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px] mt-[204px] tablet:mt-[160px] mob:mt-[106px]">
        <div className="flex mob:grid mob:justify-items-center gap-[58px] tablet:gap-[30px] mob:gap-[15px]">
          <img className="tablet:w-[145px] mob:w-[97px]" src="src/assets/info.svg" alt="" />
          <div>
            <p className="max-w-[917px] mob:text-[16px]">
            В пари та міні-групи діти об’єднуються за рівнем, віком та швидкістю засвоєння матеріалу, для досягнення максимального результату.
              <span className="block">
              Індивідуальні заняття можуть проходити за загальною або індивідуальною програмою, в залежності від запиту та необхідності.
              </span>
            </p>
            <div className="pt-[22px] flex items-center gap-[18px] mob:pt-[15px]">
      <a href="https://t.me/kabinet_znaniy" className="bg-green p-[.9em] px-[2.7em] text-[1.6rem] shadow-[6px_6px_0px_0px_#243B75;] mob:text-[1.4rem] font-poppins font-semibold uppercase">
      Діагностичне заняття
      </a>
      <a href="https://instagram.com/kabinet_znaniy" className="font-poppins text-[1.6rem] mob:text-[1.4rem] underline">Instagram</a>
    </div>
          </div>
        </div>
      </section>
    )
}

export default Info2