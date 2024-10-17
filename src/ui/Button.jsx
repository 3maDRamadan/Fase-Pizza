import { Link } from "react-router-dom";

// eslint-disable-next-line
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "tracking-wide text-sm rounded-full bg-mainColor uppercase text-white font-semibold  iniline-block hover:bg-secondColor transition-colors duration-300 focus:bg-secondColo focus:ring focus:ring-secondColo focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " py-2 px-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round:base + " px-2.5 py-1 md:px-3.5 md:py-2 text-xs",
    secondary:
      "text-sm border-2 border-stone-3 tracking-wide rounded-full uppercase text-white font-semibold  iniline-block hover:bg-red-700 transition-colors duration-300 focus:bg-secondColo focus:ring focus:ring-red focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed py-1 px-3 md:px-6 md:py-3",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
    
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
