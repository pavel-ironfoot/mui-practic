import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { getApiResourse, srcImage, srcSwapi } from '../utils/utils';
import BasicCard from './Card';

export const AppBox = () => {
  const [people, setPeople] = useState([{ name: 'pasha' }]);

  useEffect(() => {
    getApiResourse(srcSwapi)
      .then(body => { setPeople(body.results); console.log(body.results) });
  }, []);

  const peopleList = people.map((elem, index) => {
    return <BasicCard
      key={elem.name}
      img={`${srcImage}${index + 1}.jpg`}
      name={elem.name}
      gender={elem.gender}
      birth_year={elem.birth_year}
      eye_color={elem.eye_color}
      skin_color={elem.skin_color}
    />
  });

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        padding: '20px',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'primary.dark',
      }}
    >

      {peopleList}
    </Box>
  );
}