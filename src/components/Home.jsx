// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box } from '@mui/material'

const images = [
  {
    title:"1st Background",
    backgroundImage:"https://wallpapers.com/images/featured/messi-4k-ultra-hd-t7otmb1xwl662a0r.jpg"
  }
]

const Home = () => {
  return images.map((image, index)=>(
      <>
      <Box
        key={index}
        style={{
          backgroundImage: `url(${image.backgroundImage})`,
          backgroundSize: "cover",
          margin: "0",
          padding: "0",
          backgroundPosition: "center",
          height:"100vh"

        }}
      > 
      
      </Box>
      </>
      
    ))
      
    
    
    
  
}

export default Home
