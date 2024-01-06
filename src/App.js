import React from 'react';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>ログインページ</h1>
        <Login />
      </div>
      <div>
        <h1>ユーザー登録フォーム</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default App;
