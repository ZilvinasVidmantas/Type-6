import React from 'react';
import InfoSectionCard from './info-section-card';

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  columnGap: 50,
  paddingTop: 60,
  paddingBottom: 60,
};

const InfoSection: React.FC = () => (
  <div style={style}>
    <InfoSectionCard title="About" paragraphText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus." />
    <InfoSectionCard title="Company" paragraphText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus." />
    <InfoSectionCard title="Services" paragraphText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat repudiandae deleniti sed rerum eaque aperiam eos ullam ratione doloribus." />
  </div>
);

/*
  Pagal pavyzdį faile navbar-nav.tsx atvaizduokie  {InfoSection} korteles
  {InfoSectionCard} naudodami metodą {Array.prototype.map}. Tam reikės:
    * suformuoti duomenų masyvą, naudojant {InfoSectionCardProps}
    * atvaizduoti duomenis, naudojant {Array.prototype.map}

  pertrauka iki: 11:15
  užduotis iki: 11:25

  tęsiame: 11:25
*/

export default InfoSection;
