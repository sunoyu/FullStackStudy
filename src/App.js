import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

function App() {
  return (
    <div className="App">
      My Todo Application Update
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
    </div>
  );
}

function FirstComponent() {
  return <div className="FirstComponent"> First Component </div>;
}

function SecondComponent() {
  return <div className="SecondComponent"> Second Component </div>;
}

class ThirdComponent extends Component {
  // 클래스 컴포넌트
  render() {
    return <div className="ThirdComponent"> Third Component </div>;
  }
}

class FourthComponent extends Component {
  // 클래스 컴포넌트
  render() {
    return <div className="FourthComponent"> Fourth Component </div>;
  }
}

export default App;
