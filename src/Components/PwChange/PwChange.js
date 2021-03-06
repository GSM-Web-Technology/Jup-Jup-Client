import React, { useState } from "react";
import * as S from "./Styled";
import { LoginRegister } from "../../Styles";

const PwChange = ({ toggleModal }) => {
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [newPwCheck, setNewPwCheck] = useState("");
  return (
    <LoginRegister sideMark="&" toggleModal={toggleModal}>
      <S.TextBox>
        <div className="bigText">비밀번호 변경</div>
      </S.TextBox>
      <S.InputBox>
        <div className="inputRow">
          <input
            placeholder="Current Password"
            type="password"
            value={currentPw}
            onChange={(e) => {
              setCurrentPw(e.target.value);
            }}
          />
        </div>
        <div className="newBox">
          <div className="inputRow">
            <input
              placeholder="New Password"
              type="password"
              value={newPw}
              onChange={(e) => {
                setNewPw(e.target.value);
              }}
            />
          </div>
          <div className="inputRow">
            <input
              placeholder="New Password Check"
              type="password"
              value={newPwCheck}
              onChange={(e) => {
                setNewPwCheck(e.target.value);
              }}
            />
          </div>
        </div>
      </S.InputBox>
      <S.LoginButton onClick={toggleModal}>변경</S.LoginButton>
    </LoginRegister>
  );
};

export default PwChange;
