function Footer() {
  return (
    <div className="bg-dd-blue">
      <section className="relative py-[34px]  mob:py-[25px] max-w-[1540px] m-auto px-[50px] tablet:px-[40px] mob:px-[15px]">
        <div className="flex justify-between text-white-100 mb-[20px] mob:mb-[40px] mob:text-[1.6rem]">
          <ul className="grid gap-[10px] mob:gap-[6px] min-mob:hidden">
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
          </ul>
          <ul className="grid gap-[10px] mob:gap-[6px]">
            <li>
              <a href="https://instagram.com/kabinet_znaniy" className="flex gap-[12px] mob:gap-[9px]">
                <img className="mob:w-[18px]" src="src/assets/inst.svg" alt="" /> @kabinet_znaniy
              </a>
            </li>
            <li>
              <a href="mailto:kabinetznaniy@gmail.com" className="flex gap-[12px] mob:gap-[9px]">
                <img className="mob:w-[18px]" src="src/assets/mail.svg" alt="" /> kabinetznaniy@gmail.com
              </a>
            </li>
            <li>
              <a href="https://t.me/kabinet_znaniy" className="flex gap-[12px] mob:gap-[9px]">
                <img className="mob:w-[18px]" src="src/assets/tg.svg" alt="" /> @kabinet_znaniy
              </a>
            </li>
          </ul>
        </div>
        <p className="text-center w-[100%] absolute bottom-0 text-white opacity-60 left-[50%] translate-x-[-50%]">
          © 2023 All Rights Reserved.
        </p>
      </section>
    </div>
  );
}

export default Footer;
