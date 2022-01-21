import styles from "./CSSModule.module.css";
import React from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정하고

const CSSModule = () => {
  const name = "리액트";
  const message = "제 이름은 ${name}입니다.";
  console.log(styles);

  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
