
import React from 'react';
import { ContainerPaginator, Card } from './style/PaginatoStyle';
import NavigationArrow from '../subHeader/NavigationsArrows/NavigationsArrosStyled';

export default function Paginato() {
  return (
    <ContainerPaginator>
      
        <NavigationArrow direction='left' $text='Voltar' onClick={()=>{}} /> 
            <Card>1</Card> 
            <Card>2</Card>
            <Card>3</Card> 
        <NavigationArrow direction='right' $text='Avançar' onClick={()=>{}} /> 
      
    </ContainerPaginator>
  )
}
