import Animate from "../animate/animate";

function Logo() {
  return (
    <Animate
      className="flex flex-row items-center justify-center text-white"
    >
      <span>
        <img src={"/logo/null.svg"} className="h-[20px]" />
      </span>
      <span>
        <img src={"/logo/infinity.svg"} className="ml-2 h-[40px]" />
      </span>
    </Animate>
  );
}

export default Logo;
