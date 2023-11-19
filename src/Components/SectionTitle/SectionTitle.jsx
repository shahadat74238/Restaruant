const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto w-2/5 mb-10 text-center">
      <p className="text-[#D99904] pb-2">---{subHeading}---</p>
      <h1 className="py-4 border-y-4 text-4xl font-semibold">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
