import React from "react";
import { motion } from "framer-motion";
import style from "./SectionOne.module.scss";

const SectionOne = () => (
  <>
    <div className={style.container}>
      On the morning of March 1, 2017, Catherine Mörk and Linda Altrov Berg were
      in the offices of Norstedts, a book publisher in Sweden, when they
      received an{" "}
      <motion.span
        whileTap={{ rotate: 180 }}
        style={{ display: "inline-block", cursor: "grab" }}
      >
        unusual
      </motion.span>{" "}
      email. A colleague in Venice was asking for a top-secret document: the
      unpublished manuscript of the forth-coming fifth book in Stieg Larsson’s
      “Millennium” series. The books, which follow hacker detective Lisbeth
      Salander, have sold more than 100 million copies. David Lagercrantz,
      another Swedish writer, had taken over the series after Larsson’s death,
      and his latest —{" "}
      <span className={style.italic}>
        The Man Who{" "}
        <motion.span
          whileHover={{ x: 1000 }}
          style={{ display: "inline-block", cursor: "grab" }}
        >
          Chased
        </motion.span>{" "}
        His <span className={style.shadow}>Shadow</span>{" "}
      </span>{" "}
      — was expected to be one of the publishing events of the year.
    </div>
    <div className={style.container}>
      On the morning of March 1, 2017, Catherine Mörk and Linda Altrov Berg were
      in the offices of Norstedts, a book publisher in Sweden, when they
      received an{" "}
      <motion.span
        whileTap={{ rotate: 180 }}
        style={{ display: "inline-block", cursor: "grab" }}
      >
        unusual
      </motion.span>{" "}
      email. A colleague in Venice was asking for a top-secret document: the
      unpublished manuscript of the forth-coming fifth book in Stieg Larsson’s
      “Millennium” series. The books, which follow hacker detective Lisbeth
      Salander, have sold more than 100 million copies. David Lagercrantz,
      another Swedish writer, had taken over the series after Larsson’s death,
      and his latest —{" "}
      <span className={style.italic}>
        The Man Who{" "}
        <motion.span
          whileHover={{ x: 1000 }}
          style={{ display: "inline-block", cursor: "grab" }}
        >
          Chased
        </motion.span>{" "}
        His <span className={style.shadow}>Shadow</span>{" "}
      </span>{" "}
      — was expected to be one of the publishing events of the year.
    </div>
  </>
);

export default SectionOne;
