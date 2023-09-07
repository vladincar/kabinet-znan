function Questions() {
  
  return (
    <section className="relative max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px] mt-[171px] tablet:mt-[130px] mob:mt-[106px]">
      <h1 className="font-rubik text-[5.683rem] tablet:text-[4.395rem] mob:text-[3.906rem] mb-[40px] tablet:mb-[36px] mob:mb-[32px]">
        Поширені запитання
      </h1>
      <div className="flex lg:flex-row-reverse gap-[10vw] lgW:justify-between lgW:gap-[3vw] lg:gap-[10vw] mobW:gap-[0]">
        <div className="relative max-w-[500px]">
          <img className="absolute w-[30%] lg:w-[20vw] lg:relative mobW:absolute mobW:h-[100px] left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%]" src="src/assets/question.svg" alt="" />
          <img className="lg:hidden" src="src/assets/questionBkg.png" alt="" />
        </div>
        <div>
          <ul className="grid gap-[23px] text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem] min-mob:text-[1.8rem] w-[100%]">
            <li className="cursor-pointer overflow-hidden grid grid-cols-[1fr_auto] items-center mob:gap-[5px] font-rubik font-semibold border-b-black border-b-[2px] border-solid">
              На якій платформі проходять онлайн-заняття? 
              <img className='justify-self-end w-[21px] tablet:w-[18.7px] mob:w-[15.5px]' src="src/assets/triangle.svg" alt="" />
              <p className="h-[0] pb-[10px] col-span-2 w-[100%] mob:text-[1.6rem] font-normal font-poppins">На якій платформі проходять онлайн-заняття? На перше заняття необхідні тільки зошит та ручка/олівець.</p>
            </li>
            <li className="cursor-pointer overflow-hidden grid grid-cols-[1fr_auto] items-center mob:gap-[5px] font-rubik font-semibold border-b-black border-b-[2px] border-solid">
            Що потрібно на 1 заняття?
              <img className='justify-self-end w-[21px] tablet:w-[18.7px] mob:w-[15.5px]' src="src/assets/triangle.svg" alt="" />
              <p className="h-[0] pb-[10px] col-span-2 w-[100%] mob:text-[1.6rem] font-normal font-poppins">На якій платформі проходять онлайн-заняття? На перше заняття необхідні тільки зошит та ручка/олівець.</p>
            </li>
            <li className="cursor-pointer overflow-hidden grid grid-cols-[1fr_auto] items-center mob:gap-[5px] font-rubik font-semibold border-b-black border-b-[2px] border-solid">
            Чому діагностичне платне?
              <img className='justify-self-end w-[21px] tablet:w-[18.7px] mob:w-[15.5px]' src="src/assets/triangle.svg" alt="" />
              <p className="h-[0] pb-[10px] col-span-2 w-[100%] mob:text-[1.6rem] font-normal font-poppins">На якій платформі проходять онлайн-заняття? На перше заняття необхідні тільки зошит та ручка/олівець.</p>
            </li>
            <li className="cursor-pointer overflow-hidden grid grid-cols-[1fr_auto] items-center mob:gap-[5px] font-rubik font-semibold border-b-black border-b-[2px] border-solid">
            Чи можна займатися з телефону/в машині/кафе/лежачи на ліжку?
              <img className='justify-self-end w-[21px] tablet:w-[18.7px] mob:w-[15.5px]' src="src/assets/triangle.svg" alt="" />
              <p className="h-[0] pb-[10px] col-span-2 w-[100%] mob:text-[1.6rem] font-normal font-poppins">На якій платформі проходять онлайн-заняття? На перше заняття необхідні тільки зошит та ручка/олівець.</p>
            </li>
            <li className="cursor-pointer overflow-hidden grid grid-cols-[1fr_auto] items-center mob:gap-[5px] font-rubik font-semibold border-b-black border-b-[2px] border-solid">
            Чи потрібно купувати підручники?
              <img className='justify-self-end w-[21px] tablet:w-[18.7px] mob:w-[15.5px]' src="src/assets/triangle.svg" alt="" />
              <p className="h-[0] pb-[10px] col-span-2 w-[100%] mob:text-[1.6rem] font-normal font-poppins">На якій платформі проходять онлайн-заняття? На перше заняття необхідні тільки зошит та ручка/олівець.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Questions;
