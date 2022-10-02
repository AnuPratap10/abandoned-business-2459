import React from 'react'
import { Box, Container, Text, Button } from '@chakra-ui/react'
import {useNavigate} from  "react-router-dom"
export default function FifthPart() {
    const nav=useNavigate()
    const handleClick=()=>{
          nav("/login")
    }
    return (
        <div>
            <Container className="fifthCont" style={{
               
            }}>
                <Text className="fifth_text">Sign up for free</Text>
                <div style={{ display: "flex", marginLeft: "40%", gap: "10px" }}>
                    <Box >
                        <Button onClick={handleClick} className="fifth">Start for Free</Button>
                    </Box>
                    <Button className="fifth_btn">talk to sales</Button>
                    <Box>
                    </Box>
                </div>
            </Container>
        </div>
    )
}
