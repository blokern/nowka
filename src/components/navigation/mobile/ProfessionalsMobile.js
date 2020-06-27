import React, { Fragment } from 'react';

import ReturnButton from './ReturnButton';
import MobileTile from './MobileTile'

const ProfessionalsMobile = ({ returnClick }) => {
  return (
    <Fragment>
      <ReturnButton title={"Dla Profesjonalistów"} handleReturn={returnClick} />
      <MobileTile title={'Studio Wella'} link={"/studio-wella"} />
      <MobileTile title={'Oferta szkoleniowa'} link={"/oferta-szkoleniowa"} />
      <MobileTile title={'Doradcy handlowi'} link={"/doradcy-handlowi"} />
    </Fragment>
  )
}

export default ProfessionalsMobile;