import hardware from "../../assets/images/hardware.jpg";

const Why = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center bg-[#1f2737]">
      <div className="w-full md:w-[50%] md:p-0 p-8 flex items-center justify-center">
        <div className="flex flex-col">
          <span className="text-indigo-200 tracking-widest">INTRODUCTION</span>
          <div className="text-white font-bold text-[50px]">Why Choose Us?</div>
          <p className="text-gray-200 leading-8 max-w-[600px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptatibus quasi harum quae, quia nam ea aliquid voluptatum,
            voluptate placeat blanditiis quam incidunt repellat ratione
            molestiae eligendi magni! Nobis dolores quos similique illo iusto,
            obcaecati, dolorum vero culpa mollitia voluptas eveniet ad,
            provident officiis! Laboriosam sint maxime numquam rerum commodi?
          </p>
          <a href="#" className="mt-7 text-indigo-200">
            Learn More
          </a>
        </div>
      </div>
      <img src={hardware} alt="hardware" className="md:w-[50%] w-full" />
    </div>
  );
};

export default Why;
