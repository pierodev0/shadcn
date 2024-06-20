import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = '', className }) => {
  const variantStyle = {
    secondary: 'bg-gray-100 text-slate-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-700/80',
    destructive:
      'bg-red-600 text-white hover:bg-red-500 dark:bg-red-700 dark:text-white dark:hover:bg-red-800',
    outline:
      'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-500 dark:bg-black dark:text-white dark:hover:border-slate-800 dark:hover:bg-gray-800 dark:border-slate-700',
  };

  return (
    <button
      className={twMerge(
        `inline-flex h-10 cursor-pointer items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 ${variantStyle[variant]} ${className}`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
