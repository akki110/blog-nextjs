const CategoryCard = ({ title, description, icon, isCategoryPage = false }) => {
  return (
    <div
      className={`w-full border border-gray-300 hover:bg-flame/80 hover:border-flame/80 hover:cursor-pointer group flex ${
        !isCategoryPage
          ? "flex-col items-start min-h-48"
          : "flex-row items-center h-16"
      } justify-center gap-3 p-5`}
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
