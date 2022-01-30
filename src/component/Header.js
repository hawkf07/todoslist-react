import {useState} from 'react'
import {Container,Typography} from '@mui/material'

const Header = () => {
  return (
    <Container style={{
        padding:"2rem",
      }}>
      <Typography style={{
          textAlign:"center"
        }} variant="h4">
        Daily Todos List 
      </Typography>
    </Container>
  )

}


export default Header;
