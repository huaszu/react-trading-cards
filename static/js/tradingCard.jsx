'use strict';

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Seed.py",
    skill: "clifff diving",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "turning screams into energy",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

function TradingCardContainer(props) {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
      name= {currentCard.name}
      skill= {currentCard.skill}
      imgUrl= {currentCard.imgUrl}
      key= {currentCard.cardId}
      />
    );
  }
  return <React.Fragment>{tradingCards}</React.Fragment>;
}

ReactDOM.render(<TradingCardContainer />, document.querySelector('#all-cards'));
