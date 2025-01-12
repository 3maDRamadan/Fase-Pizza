import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-sky-300 hover:text-green-500 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
