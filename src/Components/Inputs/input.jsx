import s from "./input.module.scss";

const DefaultInput = ({ onChange }) => {
  return (
    <div className={s.input_container_search}>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search Movies or TV Shown"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeinejoin="round"
        />
      </svg>
    </div>
  );
};

export default DefaultInput;
