import styled from "styled-components";

export const ContainerButtons = styled.section`
    width: 100%;
    padding: 15px 0px 5px 3%;
    display: flex;
    justify-content: space-between;

`
export const ContainerAlterList = styled.div

interface NameProps {
    checked: boolean;
    gradient: string;
  }
  
  export const RadioInputs = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: rgb(13, 13, 13);
    box-sizing: border-box;
    /* box-shadow: 0 0 0px 1px rgba(255, 255, 255, 0.92); */
    padding: 0.25rem;
    width: 200px;
    font-size: 15px;
    column-gap: 5px;
  `;
  
  export const Radio = styled.label`
    flex: 1 1 auto;
    text-align: center;
  `;
  
  export const HiddenInput = styled.input.attrs({ type: 'radio' })`
    display: none;
  `;
  
  export const Name = styled.span<NameProps>`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: 0.3rem 0;
    color: #eeeeee;
    transition: all 0.15s ease-in-out;
    background: ${props => props.checked ? props.gradient : '#151515a3'};
    font-weight: ${props => props.checked ? '600' : 'normal'};
  `;




export const TableContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;
  margin:0;
  padding: 1% 3%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.thead`
  /* background-color: #f4f4f4; */
  background: linear-gradient(to right,#2D1782,#13B955);
  color: white;
`;

export const TableHeaderCell = styled.th`
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 1.1em;
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  font-size: 1.021em;
`;

// ButtonStyle.ts

export const StyledButton = styled.button`
  border: none;
  display: flex;
  padding: 0.5rem 1rem;
  margin-right: 3%;
  background-color: transparent;
    color: #4CAF50;
    font-size: 14px;
    line-height: 0.4rem;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    border: 1px solid #4caf508f;
    text-transform: uppercase;
    vertical-align: middle;
    align-items: center;
  border-radius: 0.5rem;
  user-select: none;
  gap: 0.55rem;
  box-shadow: 0 4px 6px -1px #50ec4830, 0 2px 4px -1px #48ec6916;
  transition: all 0.6s ease;

  &:hover {
    box-shadow: 0 7px 19px -3px #1fde2571, 0 4px 6px -2px #5bec4816;
  }

  &:focus,
  &:active {
    opacity: 0.85;
    box-shadow: none;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;


// List


// arquivadas
export const ContainerArchived = styled.section`
  width: 100%;
  padding: 0 0 3% 3%;
  `
export const BtnArchived = styled.button`
  display:flex;
  background-color: transparent;
  color:white;
  border:none;
  svg{
    color:white;
    background-color: transparent;
    width: 15px;
    margin:2px 4px; 
  }
`

// Componente principal da paginação
export const PaginationWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  padding-bottom: 3%;
`;

// Botões de navegação
export const PaginationButton = styled.li<{ disabled?: boolean }>`
  margin: 0 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

// Botão de navegação com estilo
export const ButtonLink = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

// Itens de página
export const PageItem = styled.li<{ active?: boolean }>`
  margin: 0 4px;
  a {
    color: ${props => (props.active ? 'white' : '#ccc')};
    text-decoration: none;
    padding: 8px;
    display: inline-block;
    border-radius: 4px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

// Selecionador de tamanho de página
export const PageSizeSelector = styled.div`
  margin-left: 9%;
  display: flex;
  align-items: center;

  .ant-select-selector {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    /* border-radius: 4px; */
    padding: 4px 8px;
    /* background-color: #fff; */
    cursor: pointer;

    .ant-select-selection-item {
      color: #cdcdcd;
    }

    .ant-select-arrow {
      color: #cccccc;
    }
  }

  .ant-select-dropdown {
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;  

//List
export const ListContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;
  margin:0;
  padding: 1%   3%;
  margin-bottom: 7px;
  ::-webkit-scrollbar {
    height: 8px; /* Define the height of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #0f0e0e; /* Color of the track */
    border-radius: 10px; /* Rounded corners for the track */
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar */
    border-radius: 10px; /* Rounded corners for the scrollbar */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color when the scrollbar is hovered */
  }
`;

export const ListUl = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  column-gap: 3%;

  li{
    list-style: none;
    border: 1px solid gray;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    border-image: linear-gradient(to right, #C36868, #3C1EB3) 1;
    border-radius: 10px;
    
    .containerOT{
      display: flex;
      flex-direction: column;
      width: 40%;
      align-items: start;
    }
    .origin{
      color: white;
      letter-spacing: 2px;
    }
    .translation{
      color: #d3d3d3;
    }
    .speak{
      width: 22%;
    }
    .date{
      width: 28%;
    }
    .checkedBtn{
      width: 5%;
      min-width: 40px;
      max-width: 40px;
        .checkbox-wrapper-12 {
          position: relative;
        }

        .checkbox-wrapper-12 > svg {
          position: absolute;
          top: -130%;
          left: -170%;
          width: 110px;
          pointer-events: none;
        }

        .checkbox-wrapper-12 * {
          box-sizing: border-box;
        }

        .checkbox-wrapper-12 input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          margin: 0;
        }

        .checkbox-wrapper-12 input[type="checkbox"]:focus {
          outline: 0;
        }

        .checkbox-wrapper-12 .cbx {
          width: 24px;
          height: 24px;
          top: calc(100px - 12px);
          left: calc(100px - 12px);
        }

        .checkbox-wrapper-12 .cbx input {
          position: absolute;
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
          border: 2px solid #bfbfc0;
          border-radius: 50%;
        }

        .checkbox-wrapper-12 .cbx label {
          width: 24px;
          height: 24px;
          background: none;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          transform: trasnlate3d(0, 0, 0);
          pointer-events: none;
        }

        .checkbox-wrapper-12 .cbx svg {
          position: absolute;
          top: 5px;
          left: 4px;
          z-index: 1;
          pointer-events: none;
        }

        .checkbox-wrapper-12 .cbx svg path {
          stroke: #fff;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 19;
          stroke-dashoffset: 19;
          transition: stroke-dashoffset 0.3s ease;
          transition-delay: 0.2s;
        }

        .checkbox-wrapper-12 .cbx input:checked + label {
          animation: splash-12 0.6s ease forwards;
        }

        .checkbox-wrapper-12 .cbx input:checked + label + svg path {
          stroke-dashoffset: 0;
        }

  @-moz-keyframes splash-12 {
    40% {
      background: #866efb;
      box-shadow: 0 -18px 0 -8px #866efb, 16px -8px 0 -8px #866efb, 16px 8px 0 -8px #866efb, 0 18px 0 -8px #866efb, -16px 8px 0 -8px #866efb, -16px -8px 0 -8px #866efb;
    }

    100% {
      background: #866efb;
      box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
    }
  }

  @-webkit-keyframes splash-12 {
    40% {
      background: #866efb;
      box-shadow: 0 -18px 0 -8px #866efb, 16px -8px 0 -8px #866efb, 16px 8px 0 -8px #866efb, 0 18px 0 -8px #866efb, -16px 8px 0 -8px #866efb, -16px -8px 0 -8px #866efb;
    }

    100% {
      background: #866efb;
      box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
    }
  }

  @-o-keyframes splash-12 {
    40% {
      background: #866efb;
      box-shadow: 0 -18px 0 -8px #866efb, 16px -8px 0 -8px #866efb, 16px 8px 0 -8px #866efb, 0 18px 0 -8px #866efb, -16px 8px 0 -8px #866efb, -16px -8px 0 -8px #866efb;
    }

    100% {
      background: #866efb;
      box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
    }
  }

  @keyframes splash-12 {
    40% {
      background: #866efb;
      box-shadow: 0 -18px 0 -8px #866efb, 16px -8px 0 -8px #866efb, 16px 8px 0 -8px #866efb, 0 18px 0 -8px #866efb, -16px 8px 0 -8px #866efb, -16px -8px 0 -8px #866efb;
    }

    100% {
      background: #866efb;
      box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
    }
  }
    }
    .containerEC{
      display: flex;
      width: 9%;
      min-width: 40px;
      max-width: 60px;
      justify-content: space-between;
    }
    .btnClear, .editBtn {
  background-color: transparent;
  position: relative;
  border: none;
}

.btnClear::after {
  content: 'delete';
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background-color: rgb(168, 7, 7);
  padding: 4px 8px;
  border-radius: 5px;
  transition: .2s linear;
  color: white;
  text-transform: uppercase;
  font-size: 10px;
  opacity: 0;
  visibility: hidden;
}

.editBtn::after {
  content: 'editar';
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background-color: rgb(7, 69, 168);
  padding: 4px 8px;
  border-radius: 5px;
  transition: .2s linear;
  color: white;
  text-transform: uppercase;
  font-size: 10px;
  opacity: 0;
  visibility: hidden;
}

.icon {
  transform: scale(1.1);
  transition: .2s linear;
  fill: rgb(255, 255, 255);
}
.btnClear > .icon{
  fill: rgb(97 26 26);
}
.editBtn > .icon{
fill: rgb(221, 234, 255);
}
.btnClear:hover > .icon,
.editBtn:hover > .icon {
  transform: scale(1.3);
}

.btnClear:hover > .icon path {
  fill: rgb(168, 7, 7);
}

.editBtn:hover > .icon path {
  fill: rgb(29, 111, 194);
}

.btnClear:hover::after,
.editBtn:hover::after {
  visibility: visible;
  opacity: 1;
  top: -110%;
}
  }
`


