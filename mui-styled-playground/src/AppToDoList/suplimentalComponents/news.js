import React, { useEffect, useState } from 'react'
import { ImageList, ImageListItem, ImageListItemBar, Paper } from '@mui/material';

const NewsComponents = () => {

  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    var url = `https://freetestapi.com/api/v1/destinations?limit=5`;  
    fetch(url).then(response => response.json()).then(response => setDestinations(response))      
  }, []);

  return <>
    <ImageList>
    {
      destinations.map((el) => 
        <ImageListItem key={el.id}>
            <img 
              src={el.image}
              alt={el.country}
              loading='lazy'
            />
            <ImageListItemBar
              title={el.country}
              subtitle={el.local_dishes.join(', ')}
              position='below'
            />
        </ImageListItem>
      )
    }
    </ImageList>
  </>
}

export default NewsComponents;