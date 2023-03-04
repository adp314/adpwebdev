import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Cards } from "../Cards";
import ironhacklogo from "../../assets/ironhack.png";
import goultarenalogo from "../../assets/goultarenalogo.png";
import adplogo from "../../assets/adplogo.png";
import { BsArrowRight } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ResponsiveCardsXL } from "../ResponsiveCardsXL";
import { ResponsiveCardsLG } from "../ResponsiveCardsLG";
import { ResponsiveCardsMD } from "../ResponsiveCardsMD";
import { ResponsiveCardsSM } from "../ResponsiveCardsSM";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function Projects() {
  const { t, i18n } = useTranslation();
  const size: Size = useWindowSize();

  let sWidth = 0;
  let sHeight = 0;

  if (size.width && size.height != undefined) {
    sWidth = size.width;
    sHeight = size.height;
  }

  return (
    <>
      {sWidth > 1280 && <ResponsiveCardsXL />}
      {sWidth < 1280 && sWidth >= 1024 && <ResponsiveCardsLG />}
      {sWidth < 1024 && sWidth >= 640 && <ResponsiveCardsMD />}
      {sWidth < 640 && <ResponsiveCardsSM />}
    </>
  );
}
