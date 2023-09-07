function Review() {
  return (
    <section className="relative max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px] mt-[171px] tablet:mt-[130px] mob:mt-[106px]">
      <div className="flex gap-[18px] lg:gap-[13px] tablet:gap-[0px] bg-blue-linear p-[48px] tablet:p-[38px] mob:p-[17px] pl-[0] tablet:pl-[0] mob:pl-[0] rounded-[4px] ml-[34px] mob:ml-[24px]">
        <img className="relative w-[210px] max-h-[300px] tablet:max-h-[175px] mob:max-h-[150px] mob:w-[30vw] min-mob:w-[20vw] min-mob:h-[20vw] min-mob:mt-[10px] lg:mt-[50px] mob:mt-[45px] rounded-[4px] right-[34px] mob:right-[24px] object-cover" src="src/assets/mother.PNG" alt="" />
        <div className="text-h2-color">
          <h3 className="font-rubik font-semibold text-[4rem] tablet:text-[3.2rem] mob:text-[2.5rem] mb-[22px] tablet:mb-[15px] mob:mb-[8px] ">Валерія, мама Даніка</h3>
          <p className="leading-[140%] text-[2.4rem] tablet:text-[1.8rem] mob:text-[1.6rem]">
            Доброго дня. Хочу подякувати за вашу наполегливу працю протягом
            цього навчального року та не тільки) Так як я також вчитель, не
            можна не помітити бездоганної методичної підготовки до уроків з
            Данею та постійного закріплення вивченого матеріалу. Ви дійсно
            працюєте за покликом душі та одразу знайшли підхід до нашого Дані.
            Наснаги вам та гарного відпочинку. Чекаємо початку навчального року
            з нетерпінням.
          </p>
        </div>
      </div>
      <a href="" className="flex gap-[8px] mob:gap-[5px] mt-[22px] mob:mt-[13px] ml-[34px] mob:ml-[24px] mob:text-[1.6rem]"><p className="underline text-[#474747]">Більше відгуків</p> <img src="src/assets/arrReview.svg" alt="" /></a>
    </section>
  );
}
export default Review;
