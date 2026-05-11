

const Section = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section
      id={id}
      className={`py-24 px-4 ${dark ? "bg-[#FFF5F8] dark:bg-[#1A0D12]" : "bg-white dark:bg-[#140A0E]"} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-16">
            <p className="text-rose-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              ✦ {subtitle || "Section"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
              {title}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-8 h-[2px] bg-pink-200 rounded-full"></div>
              <div className="w-12 h-[3px] bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="w-12 h-[3px] bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
              <div className="w-8 h-[2px] bg-pink-200 rounded-full"></div>
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;