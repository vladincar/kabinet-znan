function Hello() {
  return (
    <section className="max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px] mt-[171px] tablet:mt-[130px] mob:mt-[106px]">
      <h1 className="font-rubik text-[5.683rem] tablet:text-[4.395rem] mob:text-[3.906rem] mb-[40px] tablet:mb-[36px] mob:mb-[32px]">
        Давайте знайомитися!
      </h1>
      <div className="grid grid-cols-[1fr,1fr,1.5fr] lg:grid-cols-[1fr,1fr] gap-x-[50px] lg:gap-x-[0] gap-y-[41px] mob:gap-y-[32px]">
        <div className="lg:mr-[25px] tablet:mr-[13px] mob:mr-[9px]">
          <img className="h-[85%] lg:h-[auto] object-cover shadow-[10px_10px_0px_0px_#243B75] mob:shadow-[7px_7px_0px_0px_#243B75] mb-[24px] tablet:mb-[21px] mob:mb-[16px] rounded-[4px]" src="src/assets/ludmila.png" alt="" />
          <p className="text-justify mob:text-[1.6rem]">
            <span className="italic">Людмила Перепелиця</span> - магістр дошкільної освіти, викладач початкової
            школи, педагог зі швидкочитання.
          </p>
        </div>
        <div className="lg:ml-[25px] tablet:ml-[13px] mob:ml-[9px] mt-[3vw]">
          <img className="h-[85%] lg:h-[auto] object-cover shadow-[10px_10px_0px_0px_#243B75] mob:shadow-[7px_7px_0px_0px_#243B75] mb-[24px] tablet:mb-[21px] mob:mb-[16px] rounded-[4px]" src="src/assets/viktoria.png" alt="" />
          <p className="text-justify mob:text-[1.6rem]">
            <span className="italic">Вікторія Горенко</span> - викладач англійської мови для дітей та дорослих.
          </p>
        </div>
        <div className="grid gap-[2vw] lg:col-[1_/_span_3] content-baseline">
          <div className="font-medium bg-white-linear py-[28px] tablet:py-[17px] mob:py-[17px] px-[18px] mob:px-[13px] rounded-[4px]">
            <h3 className="text-h3-color font-semibold font-rubik text-[3.198rem] tablet:text-[2.813rem] mob:text-[2.5rem] mb-[6px] mob:mb-[4px]">Наша мета:</h3>
            <p className="text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem]">
              Освічене, розумне та виховане покоління.
            </p>
          </div>
          <div className="font-medium bg-white-linear py-[28px] tablet:py-[17px] mob:py-[17px] px-[18px] mob:px-[13px] rounded-[4px]">
            <h3 className="text-h3-color font-semibold font-rubik text-[3.198rem] tablet:text-[2.813rem] mob:text-[2.5rem] mb-[6px] mob:mb-[4px]">Фундамент наших занять:</h3>
            <p className="text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem]">
            Дисципліна, системність та відповідальність, базовані на любові.
            </p>
          </div>
          <div className="font-medium bg-white-linear py-[28px] tablet:py-[17px] mob:py-[17px] px-[18px] mob:px-[13px] rounded-[4px]">
            <p className="text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem] italic">
            Ми знаємо, що ваша дитина індивідуальна, саме тому складемо для неї максимально ефективну програму.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hello;
