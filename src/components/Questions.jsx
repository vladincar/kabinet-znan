import { useState } from "react";
function Questions() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  const questions = [
    {
      question: "На якій платформі проходять онлайн-заняття?",
      answer: "Заняття проходять на платформі Zoom",
    },
    {
      question: "Що потрібно на 1 заняття?",
      answer: "На перше заняття необхідні тільки зошит та ручка/олівець.",
    },
    {
      question: "Чому діагностичне платне?",
      answer: "На діагностичному занятті Ви отримаєте: 30-40 хв. діагностики знань дитини з бажаного напрямку; 20-30 хв. – консультація батьків з подальшими тезовими письмовими рекомендаціями, завдяки котрим Ви будете знати в якому напрямку далі працювати.",
    },
    {
      question: "Чи можна займатися з телефону/в машині/кафе/лежачи на ліжку?",
      answer: "Можна, але якщо це одноразово за форс-мажорними обставинами. Тому що для продуктивного сприйняття інформації мають бути дотримані санітарно-гігієнічні норми учбового процесу (зір, осанка, тиха робоча зона).",
    },
    {
      question: "Чи потрібно купувати підручники?",
      answer: "Потрібно купувати на заняття з англійської мови: 1 комплект = 1 рівень.",
    },
  ];
  
  return (
    <section className="h-min relative max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px] mt-[171px] tablet:mt-[130px] mob:mt-[106px]">
      <h1 className="font-rubik text-[5.683rem] tablet:text-[4.395rem] mob:text-[3.906rem] mb-[40px] tablet:mb-[36px] mob:mb-[32px]">
        Поширені запитання
      </h1>
      <div className="flex lg:flex-row-reverse gap-[10vw] lgW:justify-between lgW:gap-[3vw] lg:gap-[5vw] mobW:gap-[0] mobW:bg-[url('src/assets/bg-q.svg')] mobW:bg-no-repeat mobW:bg-center">
        <div className="self-center relative max-w-[500px] h-min ">
          <img
            className="absolute w-[30%] lg:w-[20vw] lg:translate-y-[0%] lg:min-w-[80px] lg:relative mobW:hidden left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%]"
            src="src/assets/question.svg"
            alt=""
          />
          <img className="lg:hidden" src="src/assets/questionBkg.png" alt="" />
        </div>
        <div className="max-w-[720px]">
        <ul className="grid gap-[23px] text-[2.399rem] tablet:text-[2.25rem] mob:text-[2rem] min-mob:text-[1.8rem] w-[100%]">
            {questions.map((question, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={`cursor-pointer overflow-hidden grid grid-cols-[1fr_auto] items-center gap-x-[2vw] mob:gap-y-[5px] font-rubik font-semibold border-b-black border-b-[2px] border-solid`}
              >
                {question.question}
                <img
                  className={`${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  } 'transition ease-in-out duration-300 justify-self-end w-[21px] tablet:w-[18.7px] mob:w-[15.5px]`}
                  src="src/assets/triangle.svg"
                  alt=""
                />
                <p
                  className={`${
                    activeIndex === index
                      ? "max-h-[200px] opacity-100"
                      : "max-h-[0px] opacity-0"
                  } "transition ease-in-out duration-300  mb-[10px] col-span-2 w-[100%] mob:text-[1.6rem] font-normal font-poppins`}
                >
                  {question.answer}
                </p>
              </li>
            ))}
            </ul>
        </div>
      </div>
    </section>
  );
}

export default Questions;
