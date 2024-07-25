
import styled from 'styled-components';

const SearchWrapper = styled.div`
  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
    margin-right: 2em;
  }

  .input {
    border-style: none;
    height: 50px;
    width: 50px;
    padding: 10px;
    outline: none;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    background-color: rgb(13, 13, 13);
    border: 2px solid rgb(23, 13, 43);
    box-shadow: 0px 0px 13px rgb(23, 13, 43);
    padding-right: 40px;
    color: #fff;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
  }

  .input::placeholder {
    color: #8f8f8f;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 55px;
    height: 50px;
    outline: none;
    border-style: none;
    border-radius: 50%;
    pointer-events: painted;
    background-color: transparent;
    transition: 0.2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 250px;
    border-radius: 0px;
    background-color: transparent;
    border: 2px solid rgba(23, 13, 43, 0);
    border-bottom: 3px solid rgb(65, 54, 189);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;
export default SearchWrapper;