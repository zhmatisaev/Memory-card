// import { Col, Container, Row } from "react-bootstrap";
// import "./App.css";
// import { useState } from "react";
// import Card from "./components/Card";
// import Header from "./components/Header";
// // import Card from "./components/Card";
// import uniqueCardsArray from "./data.js";
// //Fisher Yates modern shuffle algoritms
// function swap(array, i, j) {
//   const temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// function shuffleCards(array) {
//   const length = array.length;
//   for (let i = length; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * i);
//     const currentIndex = i - 1;
//     swap(array, currentIndex, randomIndex);
//   }
//   return array;
// }

// function App() {
//   const [cards, setCards] = useState(() =>
//     shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
//   );
//   const [openCards, setOpencards] = useState([]);
//   const [matchedCards, setMatchedcards] = useState({});
//   const [moves, setMoves] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const timerout = useRef(null);
//   const [shoulDisableAllCards, setShoulDisableAllCards] = useState(false);
//   const [bestScore, setBestScore] = useState(
//     JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
//   );
//   const checkCompletion = () => {
//     if (Object.keys(matchedCards).length === uniqueCardsArray.length) {
//       setShowMadal(true);
//       const highScore = Math.min(moves, bestScore);
//       setBestScore(highScore);
//       localStorage.setItem("bestScore", highScore);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Container>
//         <Row>
//           {cards.map((card, index) => {
//             return (
//               <Col xs={6} md={3} lg={2}>
//                 <Card key={index} card={card} index={index} />
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//       hello
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import uniqueCardsArray from "./data.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
// import { Col, Container, Row } from "react-bootstrap";
// import Card from "./components/Card";
// import Finish from "./components/Finish/index";

// FisherYates Modern Shuffle Algorithm
// function swap(array, i, j) {
//   const temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }
// function shuffleCards(array) {
//   const length = array.length;
//   for (let i = length; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * i);
//     const currentIndex = i - 1;
//     swap(array, currentIndex, randomIndex);
//   }
//   return array;
// }

// const [cards, setCards] = useState(() =>
//   shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
// );
// const [openCards, setOpencards] = useState([]);
// const [matchedCards, setMatchedcards] = useState({});
// const [moves, setMoves] = useState(0);
// const [showModal, setShowModal] = useState(false);
// const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
// const [bestScore, setBestScore] = useState(
//   JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
// );
// const timeout = useRef(null);

// const disable = () => {
//   setShouldDisableAllCards(true);
// };

// const enable = () => {
//   setShouldDisableAllCards(false);
// };

// const checkCompletion = () => {
//   if (Object.keys(matchedCards).length === uniqueCardsArray.length) {
//     setShowModal(true);
//     const highScore = Math.min(moves, bestScore);
//     setBestScore(highScore);
//     localStorage.setItem("bestScore", highScore);
//   }
// };

// const evaluate = () => {
//   const [first, second] = openCards;
//   enable();
//   if (cards[first].type === cards[second].type) {
//     setMatchedcards((prev) => ({ ...prev, [cards[first].type]: true }));
//     setOpencards([]);
//     // alert("you have found a match");
//     return;
//   }
//   timeout.current = setTimeout(() => {
//     setOpencards([]);
//   }, 500);
// };

// const handleCardClick = (index) => {
//   if (openCards.length === 1) {
//     setOpencards((prev) => [...prev, index]);
//     setMoves((moves) => moves + 1);
//     disable();
//   } else {
//     clearTimeout(timeout.current);
//     setOpencards([index]);
//   }
// };
// useEffect(() => {
//   let timeout = null;
//   if (openCards.length === 2) {
//     timeout = setTimeout(evaluate, 300);
//   }
//   return () => {
//     clearTimeout(timeout);
//   };
//   // eslint-disable-next-line
// }, [openCards]);

// useEffect(() => {
//   // eslint-disable-next-line
//   checkCompletion();
//   // eslint-disable-next-line
// }, [matchedCards]);

// const checkIsFlipped = (index) => {
//   return openCards.includes(index);
// };
// const checkIsInactive = (card) => {
//   return Boolean(matchedCards[card.type]);
// };
// const handleRestart = () => {
//   setMatchedcards({});
//   setOpencards([]);
//   setShowModal(false);
//   setMoves(0);
//   setShouldDisableAllCards(false);
//   setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
// };

// import Home from "./components/pages/Home/Home";
import SignUp from "../src/components/pages/SignUp/index";
import Home from "./components/pages/Home/Home.js";
import Login from "../src/components/pages/Login/index";
import Main from "./components/Main/main.js";

import { AuthLayout } from "./components/layouts/AuthLayout/index";
import { MainLayout } from "./components/layouts/MainLayout/index";

import { routes } from "./routes";
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { HomeLayout } from "./components/layouts/HomeLayout";
// import Main from "./components/Main/main";
// import Header from "./components/Header/index";
const App = () => {
  // const currentUser = true;
  const state = useSelector((state) => state);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [currentUser]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Home /> */}

          <AuthLayout path={routes.login} component={Login} />
          <AuthLayout path={routes.sign_up} component={SignUp} />
          <AuthLayout path={routes.main} component={Main} />

          {/* <ProfileLayout path={routes.user_profile} component={UserProfile} /> */}
          <MainLayout path={routes.home} component={Home} />
          {/* <HomeLayout path={routes.main} component={Main} /> */}
        </Switch>
      </BrowserRouter>

      {/* <SignUp /> */}
      {/* <Main /> */}
    </div>
  );
};

export default App;
