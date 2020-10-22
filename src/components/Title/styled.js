import styled from "styled-components";
import { leerColor, colores } from "../../constants";

const TitleText = styled.h1`
  font-family: ${(props) => (props.primary ? "Staatliches" : "Abel")};
  letter-spacing: 10px;
  margin-bottom: ${(props) => (props.margin ? "30px" : "0")};
  margin-right: ${(props) => (props.margin ? "50px" : "0")};
  margin-top: 60px;
  color: ${leerColor(colores.blanco)} !important ;
  text-align: ${(props) => {
    switch (props.align) {
      case "center":
        return "center";
      case "left":
        return "left";
    }
  }};
  border-bottom: ${(props) => {
    switch (props.type) {
      case "border":
        return "3px solid #fff";
      case "none":
        return "0px";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "h1":
        return "48px";
      case "h2":
        return "36px";
      case "h3":
        return "24px";
      case "h4":
        return "18px";
      case "componentsHeading":
        return "60px";
    }
  }};

/*

  ::after {
      content: '';
      position: absolute;
      background: linear-gradient(90.01deg,hsl(169.29999999999995,86.4%,68.2%) 0%,hsl(259.1,93.4%,17.8%) 99.98%);
      width: 45%;
      bottom: calc(50% - 6px);
      left: 0;
      padding-bottom: 15px;
    }
  
*/

`;

export default TitleText;
