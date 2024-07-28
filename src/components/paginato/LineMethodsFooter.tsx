import React from "react";
import {
  BackButton,
  ContainerFooterMethods,
} from "./style/LineMethodsFooterStyle";
import NavigationArrow from "../subHeader/NavigationsArrows/NavigationsArrosStyled";
import { NavLink } from "react-router-dom";
interface SubFooterProps {
  $url?: string;
  action1?: () => void;
  action2?: () => void;
}

const LineMethodsFooter: React.FC<SubFooterProps> = ({
  $url = "/",
  action1,
  action2,
}) => {
  return (
    <ContainerFooterMethods>
      <NavigationArrow direction="left" $text="Voltar" onClick={action1} />
      <NavLink to={$url}>
        <BackButton>
          <div></div>
          <div></div>
          <div></div>
        </BackButton>
      </NavLink>
      <NavigationArrow direction="right" $text="Avançar" onClick={action2} />
    </ContainerFooterMethods>
  );
};

export default LineMethodsFooter;
