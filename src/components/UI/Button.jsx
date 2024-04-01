export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    // 재사용성 버튼 / 버튼 속성 (ex_ onClick, type..) ...props로 넣어줌
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
