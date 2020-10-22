import styled from 'styled-components'
import { leerColor, colores } from "../../constants";

const Container = styled.button`
    background-color: rgba(20,20,20,0.5);
    letter-spacing: 4px;
    text-transform: uppercase;
    //border: 1px solid white;
    padding: 1em 2em 1em 2em;
    //color: ${leerColor(colores.blanco)};
    font-family: 'Abel', sans-serif;
    width: auto!important;
    font-size:1em;
    margin-right: ${(props) => (props.margin ? "50px" : "0")}; 
    :hover{ 
        border-color: ${(props) => (props.state === "disabled" || props.state === "error" ? "" : "#fff")};
        box-shadow: ${(props) => (props.state === "disabled" || props.state === "error" ? "" : "0 0 10px #fff")};
        outline: none;
    }
    :focus{border-color: white; box-shadow: 0 0 20px white;}

    color: ${(props) => {
        switch (props.state) {
        case "standard":
            return leerColor(colores.blanco);
        case "focus":
            return leerColor(colores.blanco);
        case "error":
            return leerColor(colores.blanco);
        case "submit":
            return leerColor(colores.blanco);
        case "disabled":
            return leerColor(colores.gris);
        }
    }};

    border: ${(props) => {
        switch (props.state) {
        case "standard":
            return "1px solid white";
        case "focus":
            return "1px solid white";
        case "error":
            return "1px solid rgb(156,25,25)";
        case "submit":
            return "1px solid rgb(104, 244, 219)";
        case "disabled":
            return "1px solid rgb(99, 99, 99)";
        }
    }};

    box-shadow: ${(props) => {
        switch (props.state) {
        case "focus":
            return "0 0 20px white";
        case "error":
            return "0 0 20px rgb(156,25,25)";
        case "submit":
            return "0 0 20px rgb(104, 244, 219)";
        case "disabled":
            return "0 0 0px rgb(99, 99, 99)";
        }
    }};

`

export default Container