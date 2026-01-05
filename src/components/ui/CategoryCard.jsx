const CategoryCard = ({ title, description, icon, isCategoryPage = false }) => {
  return (
    <div
      className={`w-full border border-gray-300 hover:bg-flame/80 hover:border-flame/80 hover:cursor-pointer group flex ${
        !isCategoryPage
          ? "flex-col p-5 justify-center items-start min-h-48"
          : "flex-row p-10 justify-start items-center h-16 mb-5"
      } gap-3`}
    >
      <div className="flex justify-center items-center bg-flame/20 p-2.5 rounded group-hover:bg-white dark:group-hover:text-surface">
        {icon}
      </div>
      <h3 className="font-bold text-2xl text-surface dark:text-white">
        {title}
      </h3>
      {!isCategoryPage && (
        <p className="text-gray-400 dark:text-white max-w-64">{description}</p>
      )}
    </div>
  );
};

export default CategoryCard;
