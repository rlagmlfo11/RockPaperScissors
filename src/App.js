import { useState } from "react";
import "./App.css";
import Box from "./component/box";

const Choice = {
  가위: {
    name: "가위",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },

  바위: {
    name: "바위",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/npnx5XrxkCLWXh9UsnoS8vbK/img.png",
  },

  보: {
    name: "보",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

function App() {
  const [userselect, setUserselect] = useState(Choice);
  const [computerselect, setComputerselect] = useState(Choice);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserselect(Choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerselect(computerChoice);
    setResult(judgement(Choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    const Array = Object.keys(Choice);
    const Item = Math.floor(Math.random() * Array.length);
    const final = Array[Item];
    return Choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "가위")
      return computer.name == "보" ? "win" : "lose";
    else if (user.name == "바위")
      return computer.name == "가위" ? "win" : "lose";
    else if (user.name == "보") return computer.name == "바위" ? "win" : "lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userselect} result={result}></Box>
        <Box title="Computer" item={computerselect} result={result}></Box>
      </div>

      <div className="button">
        <button
          onClick={() => {
            play("가위");
          }}
        >
          가위
        </button>
        <button
          onClick={() => {
            play("바위");
          }}
        >
          바위
        </button>
        <button
          onClick={() => {
            play("보");
          }}
        >
          보
        </button>
      </div>
    </div>
  );
}

export default App;
