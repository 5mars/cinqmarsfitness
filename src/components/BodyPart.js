import React, {useEffect, useState} from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from "../assets/icons/gym.png"
import muscleType from "../utils/muscleTypes"

const BodyPart = ({ item, setBodyPart, bodyPart}) => {

    return (
        <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? "4px solid #ff4057" : "",
            background: "#fff",
            width: "270px",
            height: "280px",
            cursor: "pointer",
            gap: "47px",
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: "smooth"})
        }
        }
        >
            <img src={Icon} style={{ width: "40px", height: "40px"}} alt="icon"/>
            <Typography fontSize="24px" fontWeight="bold" color="#282634" textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart