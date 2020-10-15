import styled from 'styled-components';
import { leerColor, colores } from "../../constants";

const ImgContainer = styled.div`
`

const ImgGradBack =  styled.img`
      width: 40%;
     position: relative;
     z-index: 1000;
     :hover{outline: none; 
     border-color: white; 
     box-shadow: 0 0 10px white;
     }
     :hover ::after{
        content: '';
        position: absolute;
        background: linear-gradient(90.01deg,#68F4DB 0%,#1E0358 99.98%);
        width: 76%;
        bottom: -15px;
        left: 2%;
        padding: 100px;
        z-index: -1;
   }

`

export {ImgGradBack, ImgContainer}