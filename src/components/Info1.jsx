import Button from "./button.jsx";
function Info1() {
  return (
    <section className="relative max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px] mt-[171px] tablet:mt-[160px] mob:mt-[106px]">
      <div className="flex mob:grid mob:justify-items-center gap-[58px] tablet:gap-[30px] mob:gap-[15px]">
        <img className="tablet:w-[145px] mob:w-[97px]" src="src/assets/info.svg" alt="" />
        <div>
          <p className="max-w-[917px] mob:text-[16px]">
            Щоб дізнатися детальну інформацію по кожному із курсів, надішліть в
            Instagram або через кнопку звʼязку детальну інформацію, вказавши:
            курс, вік, клас (якщо курс для дитини), рівень знань за обраним
            курсом, сформувати запит або проблему.
            <span className="block font-semibold mt-[7px] font-rubik">
              Виконання домашніх завдань – ОБОВ’ЯЗКОВА умова на заняттях.
            </span>
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
}

export default Info1;
