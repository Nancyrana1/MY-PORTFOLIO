

const Button = ({ children, variant = "primary", onClick, type = "button", disabled = false, className = "" }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 tracking-wide";

  const variants = {
    primary: "bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:from-rose-500 hover:to-pink-600 shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300",
    secondary: "bg-[#FEE0EE] text-rose-700 hover:bg-pink-100 border border-pink-200 shadow-sm hover:shadow-md",
    outline: "border-2 border-rose-400 text-rose-500 dark:text-rose-300 hover:bg-rose-400 hover:text-white dark:hover:bg-rose-500 dark:border-rose-400",
    ghost: "text-rose-500 hover:bg-[#FEE0EE] dark:hover:bg-rose-900/30",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;