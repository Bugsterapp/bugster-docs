export const CustomButton = ({ children, href, variant = "primary" }) => {
    const baseClasses = "text-sm font-medium rounded-full px-3.5 py-1.5 not-prose transition-colors";
    const variants = {
        primary: "text-white dark:!text-zinc-950 bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-100 hover:dark:bg-zinc-300",
        secondary: "text-zinc-900 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 hover:dark:bg-zinc-700",
        outline: "text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800",
        lime: "flex flex-row justify-center items-center gap-3 px-3 py-3 font-mono font-bold text-lg leading-6 no-underline rounded-[13px] border border-[rgba(88,83,79,1)] bg-[rgba(244,255,201,1)] text-[rgba(56,56,56,1)] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.5),0px_1px_2px_0px_rgba(0,0,0,0.5)] hover:bg-[rgba(244,255,201,0.8)] transition-colors"
      };
      
      // Use different base classes for lime variant
      const buttonClasses = variant === "lime" 
        ? variants[variant]
        : `${baseClasses} ${variants[variant]}`;
      
      return (
        <a 
          href={href} 
          className={buttonClasses}
        >
          {children}
        </a>
      );
    };
    
    
