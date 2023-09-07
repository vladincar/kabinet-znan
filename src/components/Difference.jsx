function Difference() {
  return (
    <section className="max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px] mt-[171px] tablet:mt-[130px] mob:mt-[106px]">
      <div className="flex gap-[15px]">
        <h1 className="font-rubik text-[5.683rem] tablet:text-[4.395rem] mob:text-[3.906rem] mb-[75px] tablet:mb-[68px] mob:mb-[44px] min-mob:mb-[32px]">
          Що відрізняє нас?
        </h1>
        <img
          className="mb-[15px] tablet:w-[70px] mob:w-[60px] tablet:mt-[5px] min-mob:hidden"
          src="src/assets/diff.svg"
          alt=""
        />
      </div>
      <div className="flex justify-between gap-[30px] mob:gap-[9px]">
        <div className="grid gap-[50px] lg:gap-[26px] mob:gap-[19px] grid-cols-[repeat(2,minmax(320px,1fr))] tablet:grid-cols-[repeat(1,minmax(320px,1fr))]">
          <div className="font-medium bg-blue-linear-tr py-[28px] tablet:py-[17px] mob:py-[17px] px-[18px] mob:px-[13px] rounded-[4px]">
            <h3 className="text-h3-color font-semibold font-rubik text-[3.198rem] tablet:text-[2.813rem] mob:text-[2.5rem] mb-[6px] mob:mb-[4px]">
              15 років у професії
            </h3>
            <p className="text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem]">
              15 років у професії з безперервним навчанням та підвищенням
              кваліфікації.
            </p>
          </div>
          <div className="font-medium bg-blue-linear-tr py-[28px] tablet:py-[17px] mob:py-[17px] px-[18px] mob:px-[13px] rounded-[4px]">
            <h3 className="text-h3-color font-semibold font-rubik text-[3.198rem] tablet:text-[2.813rem] mob:text-[2.5rem] mb-[6px] mob:mb-[4px]">
              Навчаємо з любов’ю
            </h3>
            <p className="text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem]">
              Завжди в пошуках актуальних матеріалів, інтерактивних завдань для
              покращення занять та зацікавлення учнів.
            </p>
          </div>
          <div className="font-medium bg-blue-linear-tr py-[28px] tablet:py-[17px] mob:py-[17px] px-[18px] mob:px-[13px] rounded-[4px]">
            <h3 className="text-h3-color font-semibold font-rubik text-[3.198rem] tablet:text-[2.813rem] mob:text-[2.5rem] mb-[6px] mob:mb-[4px]">
              Працюємо на результат
            </h3>
            <p className="text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem]">
              Нові знання відразу використовуємо на практиці, що допомагає
              досягати кращих результатів.
            </p>
          </div>
          <div className="font-medium bg-blue-linear-tr py-[28px] tablet:py-[17px] mob:py-[17px] px-[18px] mob:px-[13px] rounded-[4px]">
            <h3 className="text-h3-color font-semibold font-rubik text-[3.198rem] tablet:text-[2.813rem] mob:text-[2.5rem] mb-[6px] mob:mb-[4px]">
              Індивідуальний підхід
            </h3>
            <p className="text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem]">
              Ми знаємо, що Ваша дитина індивідуальна, саме тому складемо для
              неї максимально ефективну програму.
            </p>
          </div>
        </div>
        <img className="w-[5vw] max-w-[37px] mob:self-end mob:translate-y-[50%] mob:translate-x-[20%]" src="src/assets/diffArr.svg" alt="" />
      </div>
    </section>
  );
}

export default Difference;
