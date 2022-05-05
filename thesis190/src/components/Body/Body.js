// libraries
import React, { useState, useEffect } from "react";

// components
import SectionOne from "../SectionOne/SectionOne.js";
import SectionTwo from "../SectionTwo/SectionTwo.js";
import SectionThree from "../SectionThree/SectionThree.js";
import SectionFour from "../SectionFour/SectionFour.js";
import SectionFive from "../SectionFive/SectionFive.js";
import SectionSix from "../SectionSix/SectionSix.js";
import SectionSeven from "../SectionSeven/SectionSeven.js";
import SectionEight from "../SectionEight/SectionEight.js";
import SectionNine from "../SectionNine/SectionNine.js";
import Book from "../Book/Book.js";
import Modal from "../Modal/Modal.js";
import ModalOne from "../ModalOne/ModalOne.js";
import ModalTwo from "../ModalTwo/ModalTwo.js";
import ModalThree from "../ModalThree/ModalThree.js";
import ModalFour from "../ModalFour/ModalFour.js";
import ModalFive from "../ModalFive/ModalFive.js";
import ModalSix from "../ModalSix/ModalSix.js";
import ModalSeven from "../ModalSeven/ModalSeven.js";
import ModalEight from "../ModalEight/ModalEight.js";
import ModalNine from "../ModalNine/ModalNine.js";
import Wall from "../Wall/Wall.js";
import Board from "../Board/Board.js";

// scss
import style from "./Body.module.scss";

const Body = () => {
  const [passedModal1, setPassedModal1] = useState(false);
  const [passedModal2, setPassedModal2] = useState(false);
  const [passedModal3, setPassedModal3] = useState(false);
  const [passedModal4, setPassedModal4] = useState(false);
  const [passedModal5, setPassedModal5] = useState(false);
  const [passedModal6, setPassedModal6] = useState(false);
  const [passedModal7, setPassedModal7] = useState(false);
  const [passedModal8, setPassedModal8] = useState(false);
  const [passedModal9, setPassedModal9] = useState(false);

  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const [isOpenModal5, setIsOpenModal5] = useState(false);
  const [isOpenModal6, setIsOpenModal6] = useState(false);
  const [isOpenModal7, setIsOpenModal7] = useState(false);
  const [isOpenModal8, setIsOpenModal8] = useState(false);
  const [isOpenModal9, setIsOpenModal9] = useState(false);

  const updateOpenModal1 = (bool) => {
    setIsOpenModal1(bool);
  };
  const updateOpenModal2 = (bool) => {
    setIsOpenModal2(bool);
  };
  const updateOpenModal3 = (bool) => {
    setIsOpenModal3(bool);
  };
  const updateOpenModal4 = (bool) => {
    setIsOpenModal4(bool);
  };
  const updateOpenModal5 = (bool) => {
    setIsOpenModal5(bool);
  };
  const updateOpenModal6 = (bool) => {
    setIsOpenModal6(bool);
  };
  const updateOpenModal7 = (bool) => {
    setIsOpenModal7(bool);
  };
  const updateOpenModal8 = (bool) => {
    setIsOpenModal8(bool);
  };
  const updateOpenModal9 = (bool) => {
    setIsOpenModal9(bool);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // console.log("scrollPosition", scrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={style.root}>
      <div className={style.shelf}></div>
      <div className={style.text}>
        {/* SECTION ONE */}
        <SectionOne />
        <Book
          i={1}
          isOpenModal={isOpenModal1}
          updateOpenModal={updateOpenModal1}
          passedModal={passedModal1}
          isValidPosition={scrollPosition}
        />
        {isOpenModal1 && (
          <ModalOne
            passedModal={passedModal1}
            setPassedModal={setPassedModal1}
            updateOpenModal={updateOpenModal1}
          />
        )}
        <Wall />

        {/* SECTION TWO */}
        <SectionTwo />
        <Book
          i={2}
          isOpenModal={isOpenModal2}
          updateOpenModal={updateOpenModal2}
          passedModal={passedModal2}
          isValidPosition={scrollPosition}
        />
        {isOpenModal2 && (
          <ModalTwo
            passedModal={passedModal2}
            setPassedModal={setPassedModal2}
            updateOpenModal={updateOpenModal2}
          />
        )}
        <Wall />

        {/* SECTION THREE */}
        <SectionThree />
        <Book
          i={3}
          isOpenModal={isOpenModal3}
          updateOpenModal={updateOpenModal3}
          passedModal={passedModal3}
          isValidPosition={scrollPosition}
        />
        {isOpenModal3 && (
          <ModalThree
            passedModal={passedModal3}
            setPassedModal={setPassedModal3}
            updateOpenModal={updateOpenModal3}
          />
        )}
        <Wall />

        {/* SECTION FOUR */}
        <SectionFour />
        <Book
          i={4}
          isOpenModal={isOpenModal4}
          updateOpenModal={updateOpenModal4}
          passedModal={passedModal4}
          isValidPosition={scrollPosition}
        />
        {isOpenModal4 && (
          <ModalFour
            passedModal={passedModal4}
            setPassedModal={setPassedModal4}
            updateOpenModal={updateOpenModal4}
          />
        )}
        <Wall />

        {/* SECTION FIVE */}
        <SectionFive />
        <Book
          i={5}
          isOpenModal={isOpenModal5}
          updateOpenModal={updateOpenModal5}
          passedModal={passedModal5}
          isValidPosition={scrollPosition}
        />
        {isOpenModal5 && (
          <ModalFive
            passedModal={passedModal5}
            setPassedModal={setPassedModal5}
            updateOpenModal={updateOpenModal5}
          />
        )}
        <Wall />

        {/* SECTION SIX */}
        <SectionSix />
        <Book
          i={6}
          isOpenModal={isOpenModal6}
          updateOpenModal={updateOpenModal6}
          passedModal={passedModal6}
          isValidPosition={scrollPosition}
        />
        {isOpenModal6 && (
          <ModalSix
            passedModal={passedModal6}
            setPassedModal={setPassedModal6}
            updateOpenModal={updateOpenModal6}
          />
        )}
        <Wall />

        {/* SECTION SEVEN */}
        <SectionSeven />
        <Book
          i={7}
          isOpenModal={isOpenModal7}
          updateOpenModal={updateOpenModal7}
          passedModal={passedModal7}
          isValidPosition={scrollPosition}
        />
        {isOpenModal7 && (
          <ModalSeven
            passedModal={passedModal7}
            setPassedModal={setPassedModal7}
            updateOpenModal={updateOpenModal7}
          />
        )}
        <Wall />

        {/* SECTION EIGHT */}
        <SectionEight />
        <Book
          i={8}
          isOpenModal={isOpenModal8}
          updateOpenModal={updateOpenModal8}
          passedModal={passedModal8}
          isValidPosition={scrollPosition}
        />
        {isOpenModal8 && (
          <ModalEight
            passedModal={passedModal8}
            setPassedModal={setPassedModal8}
            updateOpenModal={updateOpenModal8}
          />
        )}
        <Wall />

        {/* SECTION NINE */}
        <SectionNine />
        <Book
          i={9}
          isOpenModal={isOpenModal9}
          updateOpenModal={updateOpenModal9}
          passedModal={passedModal9}
          isValidPosition={scrollPosition}
        />
        {isOpenModal9 && (
          <ModalNine
            passedModal={passedModal9}
            setPassedModal={setPassedModal9}
            updateOpenModal={updateOpenModal9}
          />
        )}
        <Board />
      </div>
    </div>
  );
};

export default Body;
