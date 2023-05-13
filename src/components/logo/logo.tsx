
function Logo() {
  return (
    <div className="flex flex-row justify-center items-center text-white">
      <span className="text-[20px]">DEV</span>
      <span>
        <img src={"/logo_loader.svg"} className="h-[40px]" />
      </span>
      <span className="text-[20px]">7</span>
    </div>
  );
}

export default Logo;
