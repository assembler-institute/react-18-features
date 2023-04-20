import { useEffect, useState } from "react";
import { Input, PlanetsCarousel, UsersCarousel } from "../../components";
import '../../css/base.css'
import '../../css/sandbox.css'
import '../../css/embla.css'


export const Body = () => {
  // first render

  const [showPlanets, setShowPlanets] = useState(false);
  const [showOutSpaceCharacters, setShowOutSpaceCharacters] = useState(false);

  const OPTIONS = {}
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  // React 18 = 3 renders vs 9 renders with React 17

  // const [multiply, setMultiply] = useState(10);
  // const [divide, setDivide] = useState(10);
  // const [substract, setSubstract] = useState(10);
  // const [sum, setsum] = useState(10);


  // const onClickObjectList = () => {
  //   setShowPlanets(!showPlanets); // second render
  //   setDivide(divide / 2); // third render
  //   setSubstract(substract - 1); // fourth render
  //   setsum(sum + 5); // fifth render
  // };

  // const onClickCreators = () => {
  //   setShowOutSpaceCharacters(!showOutSpaceCharacters); // sixth render
  //   setDivide(divide / 2); // seventh render
  //   setSubstract(substract - 1); // eight render
  //   setsum(sum + 5); // ninth render
  // };

  return (
    <>
      <div className="input">
        <Input />
      </div>
      <section className="sandbox__carousel">
        <PlanetsCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      {/* <button onClick={onClickObjectList} className="m-2">
        Show Planets
      </button>
      {showPlanets && <div>{<PlanetsCarousel slides={SLIDES} options={OPTIONS} />}</div>} */}
      <section className="sandbox__carousel">
        <UsersCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      {/* <button onClick={onClickCreators} className="m-2"> Final Space Characters </button>
      {showOutSpaceCharacters && <div>{<UsersCarousel slides={SLIDES} options={OPTIONS} />}</div>} */}

    </>
  );
};
