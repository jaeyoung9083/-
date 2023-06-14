import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, title: "리액트 기초주차", name: "과제 해낸건가?", isDone: false },
    { id: 2, title: "리액트 기초주차", name: "해냈다!!", isDone: true },
  ]);
  const [title, setTitle] = useState("제목을 입력하세요");
  const [name, setName] = useState("내용을 입력하세요");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      title,
      name,
      isDone: false,
    };

    setUsers([...users, newUser]);
  };

  // 삭제 버튼 추가
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter(function (user) {
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  // Done 넘기기 버튼 추가
  const clickPassButtonHandler = (id) => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        // isDone을 true면 false로, false면 true로 변경하는 코드
        return { ...user, isDone: !user.isDone };
      } else {
        // id가 일치하지 않으면 user를 변경하지 않고 그대로 return
        return user;
      }
    });
    setUsers(newUsers);
    // 상수 user를 setUsers를 이용해 set해준다. add가 아니기 때문에 newUsers를 그대로 넣어주면 된다.
  };

  return (
    <div>
      <div>
        <body>
          <div className="todolist">My Todo List for React</div>

          <div>
            <header>
              <div className="search">
                제목 :&nbsp;
                <input
                  className="search_box"
                  value={title}
                  onChange={titleChangeHandler}
                />
                내용 :&nbsp;
                <input
                  className="search_box"
                  value={name}
                  onChange={nameChangeHandler}
                />
                <Button clickAddButtonHandler={clickAddButtonHandler} />
              </div>
            </header>
          </div>
          {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
          <h3 className="wise_saying">도비는 열일 중🔥</h3>
          <div className="app-style">
            {/** isDone이 false이면 출력한다. */}
            {users.map(function (item) {
              if (!item.isDone) {
                return (
                  <User
                    key={item.id}
                    item={item}
                    clickRemoveButtonHandler={clickRemoveButtonHandler}
                    clickPassButtonHandler={clickPassButtonHandler}
                  />
                );
              }
            })}
          </div>

          {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
          <h3 className="wise_saying">도비는 자유에요🎉</h3>
          <div className="app-style">
            {/** isDone이 true이면 출력한다. */}
            {users.map(function (item) {
              if (item.isDone) {
                return (
                  <User
                    key={item.id}
                    item={item}
                    clickRemoveButtonHandler={clickRemoveButtonHandler}
                    clickPassButtonHandler={clickPassButtonHandler}
                  />
                );
              }
            })}
          </div>
          {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
        </body>
      </div>
    </div>
  );
};
const Button = ({ clickAddButtonHandler }) => {
  return (
    <button className="plus_btn" onClick={clickAddButtonHandler}>
      추가하기
    </button>
  );
};

const User = ({ item, clickRemoveButtonHandler, clickPassButtonHandler }) => {
  return (
    <div key={item.id} className="component-style">
      <div>
        <div style={{ fontSize: "30px", fontWeight: "bolder" }}>
          {item.title}
        </div>
        <br />
        <div>{item.name}</div>
      </div>
      <br />
      <button
        className="delete_btn"
        onClick={() => clickRemoveButtonHandler(item.id)}
      >
        삭제하기
      </button>
      <button
        className="done_btn"
        onClick={() => clickPassButtonHandler(item.id)}
      >
        {item.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default App;
