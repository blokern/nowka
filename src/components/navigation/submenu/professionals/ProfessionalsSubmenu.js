import React from 'react';
import styled from 'styled-components';
import Tile from '../../Tile';
import doradcy from '../../../../img/temporary/doradcy-handlowi.jpg';
import oferta from '../../../../img/temporary/oferta-szkoleniowa.jpg';
import studio from '../../../../img/temporary/studio-wella.jpg';

const Container = styled.div`
  position: absolute;
  visibility: ${props => props.visible ? "initial" : "hidden"};
  top: ${props => (props.fixed ? '114px' : '144px')};
  left: calc(50% - 473px);
  width: 946px;
  height: 156px;
  @media screen and (min-width: 1400px) {
    width: 1324px;
    height: 211px;
    left: calc(50% - 662px);
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ProfessionalsSubmenu = ({ visible, fixed }) => {
  return (
    <Container visible={visible} fixed={fixed}>
      <Tile icon={studio} title="Studio Wella" link={'/studio-wella'} />
      <Tile icon={oferta} title="Oferta Szkoleniowa" link={'/oferta-szkoleniowa'} />
      <Tile icon={doradcy} title="Doradcy Handlowi" link={'/doradcy-handlowi'} />
    </Container>
  );
};

export default ProfessionalsSubmenu;