import "./App.css";

// import FirstComponent from "./components/learning-examples/FirstComponent";
// import { FifthComponent } from "./components/learning-examples/FirstComponent"; // 중괄호는 디폴트 컴포넌트를 가져오는게 아니라는 것을 의미

// import SecondComponent from "./components/learning-examples/SecondComponent";
// import ThirdComponent from "./components/learning-examples/ThirdComponent";
// import FourthComponent from "./components/learning-examples/FourthComponent";

import LearningComponent from "./components/learning-examples/LearningComponent";

function App() {
  return (
    <div className="App">
      My Todo Application Update
      <LearningComponent></LearningComponent>
    </div>
  );
}

export default App;
