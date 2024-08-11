  import React, { useState, useCallback } from 'react';
  import HeaderComp from '../../components/header/Header_comp';
  import SubHeader from '../../components/subHeader/SubHeader';

  import { NavigateHistory } from '../histories/script/Methods';
  import NavMobile from '../../components/navMobile/NavMobile';
  import Footer from '../../components/footer/Footer';
  import { BtnArchived, ButtonLink, ContainerADS, ContainerArchived, ContainerButtons, ContainerFA, ContainerFilter, HiddenInput, ContainerShower, ListUl, Name, PageItem, PageSizeSelector, PaginationButton, PaginationWrapper, Radio, RadioInputs, StyledButton, Table, TableBody, TableCell, TableContainer, TableHeader, TableHeaderCell, TableRow } from './style/WordStyle';
  import DataWords from './script/data';
  import { NavLink } from 'react-router-dom';

  export default function Words() {
    const { navigateBack } = NavigateHistory();
    const [selected, setSelected] = useState<'table' | 'list'>('table');
    const [selectedItems, setSelectedItems] = useState<number[]>([]);



    const handleChange = useCallback((value: 'list' | 'table') => {
      setSelected(value);
    }, []);

  
    const handleCheckboxChange = useCallback((index: number) => {
      setSelectedItems(prevSelectedItems => {
        if (prevSelectedItems.includes(index)) {
      
          return prevSelectedItems.filter(item => item !== index);
        } else {
          
          return [...prevSelectedItems, index];
        }
      });
    }, []);
    
    const GetInformationsAboutLi = useCallback((event:React.MouseEvent<HTMLUListElement>)=>{
      if (event.target instanceof HTMLLIElement) {
        console.log('Item clicado:', event.target.textContent);
      }
    },[])
    
    return (
      <>
        <HeaderComp active="LWords" />
        <SubHeader size={30} text="WORDS" fieldSearch={true} action1={navigateBack} />
        {/* <SearchFull /> */}
        <NavMobile active="NWords" />
        <main>
          <ContainerButtons>
            <RadioInputs>
              <Radio>
                <HiddenInput
                  type="radio"
                  name="radio"
                  checked={selected === 'table'}
                  onChange={() => handleChange('table')}
                />
                <Name
                  checked={selected === 'table'}
                  gradient="linear-gradient(to right, #2D1782, #13B955)"
                >
                  Table
                </Name>
              </Radio>
              <Radio>
                <HiddenInput
                  type="radio"
                  name="radio"
                  checked={selected === 'list'}
                  onChange={() => handleChange('list')}
                />
                <Name
                  checked={selected === 'list'}
                  gradient="linear-gradient(to right, #C36868, #3C1EB3)"
                >
                  List
                </Name>
              </Radio>
            </RadioInputs>
            <StyledButton>
              Adicionar
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </StyledButton>
          </ContainerButtons>
              <TableContainer>
                <ContainerFA>
                      <ContainerFilter>
                        <h3>FIlters:</h3>
                        <div className='dfop'>
                          <label className='lb-f' htmlFor="">Por origem</label>
                          <input type="text" />
                          <button>
                            <span className='srcp-f'>procurar</span>
                            <svg className='srci-f'  height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="rgb(213, 213, 213)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 22L20 20" stroke="rgb(223, 222, 234)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          </button>
                        </div>
                        <div className='dfop'>
                          <label className='lb-f' htmlFor="">Por tradução</label>
                          <input type="text" />
                          <button>
                            <span className='srcp-f'>procurar</span>
                            <svg className='srci-f'  height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="rgb(213, 213, 213)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 22L20 20" stroke="rgb(223, 222, 234)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          </button>
                        </div>
                        <div className='dfop'>
                          <label className='lb-f' htmlFor="">Por data de criação</label>
                          <input type="text" />
                          <button>
                            <span className='srcp-f'>procurar</span>
                            <svg className='srci-f'  height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="rgb(213, 213, 213)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 22L20 20" stroke="rgb(223, 222, 234)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          </button>
                        </div>
                  </ContainerFilter>
                  <ContainerADS>
                    <h2>ADS</h2>
                  </ContainerADS>
                </ContainerFA>
                
               { selected === "table" ?
               <ContainerShower>
                <Table>
                  <TableHeader>
                    <TableRow>
                      {DataWords.header.map((column, index) => (
                        <TableHeaderCell key={index}>{column}</TableHeaderCell>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {DataWords.data.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {DataWords.header.map((column, colIndex) => (
                          <TableCell key={colIndex}>
                            {(row as Record<string, string>)[column] || ''}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
               
               
                </ContainerShower>
   
                :
                <ContainerShower>
                
                <ListUl onClick={GetInformationsAboutLi }>
                {DataWords.data.slice(0, 6).map((d, index) => (
                <li key={index}>
                  <div className="checkedBtn">                       
                    <div className="checkbox-wrapper-12">
                      <div className="cbx">
                        <input 
                          checked={selectedItems.includes(index)} 
                          onClick={() => handleCheckboxChange(index)} 
                          type="checkbox" 
                          id={`cbx-${index}`}
                        />
                        <label htmlFor={`cbx-${index}`}></label>
                        <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                          <path d="M2 8.36364L6.23077 12L13 2"></path>
                        </svg>
                      </div>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <filter id="goo-12">
                            <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                            <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
                            <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="containerOT">
                    <span className='origin'>{d.origem}</span> 
                    <span className='translation'>{d.tradução}</span>
                  </div>
                  <div className="speak">{d.fala}</div>
                  <div className="date">{d.tempo}</div>
                  <div className="containerEC">
                      <button className="editBtn">
                      <svg height="1em" viewBox="0 0 512 512" className="icon">
                        <path
                          d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                        ></path>
                      </svg>
                    </button>
                    <button className="btnClear">
                      <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                      <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                    </svg>
                    </button>
                  </div>
                </li>
              ))}


                </ListUl>
                </ContainerShower>
                }
            
              </TableContainer>
                <PaginationWrapper>
                  <PaginationButton disabled={true}>
                    <ButtonLink
                      disabled={false}
                      onClick={() => {}}
                    >
                      <svg viewBox="64 64 896 896" focusable="false" data-icon="left" fill="currentColor" aria-hidden="true">
                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                      </svg>
                    </ButtonLink>
                  </PaginationButton>
                  <PageItem active={true}>
                    <NavLink to="#" onClick={() => {}}>1</NavLink>
                  </PageItem>
                  <PageItem active={true}>
                    <NavLink to="#" onClick={() => {}}>2</NavLink>
                  </PageItem>

                  <PaginationButton disabled={false}>
                    <ButtonLink
                      disabled={false}
                      onClick={() => {}}
                    >
                      <svg viewBox="64 64 896 896" focusable="false" data-icon="right" fill="currentColor" aria-hidden="true">
                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                      </svg>
                    </ButtonLink>
                  </PaginationButton>
                  <PageSizeSelector>
                    <div className="ant-select-selector">
                      <span className="ant-select-selection-item">50 / page</span>
                      <span className="ant-select-arrow">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="down" fill="currentColor" aria-hidden="true">
                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                      </span>
                    </div>
                  </PageSizeSelector>
                </PaginationWrapper> 
          
              <ContainerArchived>
                <BtnArchived>
                  Arquivadas
                  <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </BtnArchived>
              </ContainerArchived>
        </main>
        <Footer $wdb={true} />
      </>
    );
  }
