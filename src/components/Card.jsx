

const Card = ({ children, className = "", hover = true }) => {
  return (
    <div
      className={`
        relative bg-white dark:bg-[#2D1520] rounded-2xl shadow-md p-6
        transition-all duration-300 border border-pink-100 dark:border-rose-900/40
        overflow-hidden
        ${hover ? "hover:shadow-xl hover:shadow-rose-100 dark:hover:shadow-rose-900/20 hover:-translate-y-2 hover:border-pink-200 dark:hover:border-rose-700/50" : ""}
        ${className}
      `}
    >
      {/* Subtle shimmer top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-60 pointer-events-none" />
      {children}
    </div>
  );
};

export default Card;