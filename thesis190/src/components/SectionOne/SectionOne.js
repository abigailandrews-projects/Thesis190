import React from "react";
import { motion } from "framer-motion";
import style from "./SectionOne.module.scss";

const SectionOne = () => (
  <>
    <div className={style.container}>
      On the morning of March 1, 2017, Catherine Mörk and Linda Altrov Berg were
      in the offices of Norstedts, a book publisher in Sweden, when they
      received an unusual email. A colleague in Venice was asking for a
      top-secret document: the unpublished manuscript of the forth-coming fifth
      book in Stieg Larsson’s “Millennium” series. The books, which follow
      hacker detective Lisbeth Salander, have sold more than 100 million copies.
      David Lagercrantz, another Swedish writer, had taken over the series after
      Larsson’s death, and his latest — The Man Who Chased His Shadow — was
      expected to be one of the publishing events of the year.
    </div>
    <motion.div
      animate={{
        x: 0,
        backgroundColor: "#000",
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        position: "fixed",
        transitionEnd: {
          display: "none",
        },
      }}
    />
  </>
);

export default SectionOne;
