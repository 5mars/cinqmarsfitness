import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
import HeroBannerDb from "../assets/images/dumbbell.jpg"
import AiBanner from "../assets/images/AiDb.jpeg"

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: "212px", xs: "70px"},
            ml: { sm: "50px" }
        }} position="relative" p="20px">
            <Typography color="#ff4057" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>

            <Typography fontWeight={700} 
            sx={{ fontSize: { lg: "44px", xs: "40px"}}}
            mb="23px" mt="30px"
            color="#DCDCDC"
            >
                Sweat, Smile <br/> and Repeat
            </Typography>

            <Typography fontSize="22px" lineHeight="34px" mb={4} color="#999999">
                Check out the most effectives exercises
            </Typography>

            <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: "#ff4057", padding: "10px"}}>
                Explore Exercises
            </Button>
            
            <Typography 
            fontWeight={600} 
            color="#ff4057"
            sx={{
                opacity: 0.1,
                display: {lg: "block", xs: "none"}
            }}
            fontSize="200px"
            >
                Exercise
            </Typography>

            <img src={AiBanner} alt="banner" className="hero-banner-img"/>
        </Box>
    )
}

export default HeroBanner