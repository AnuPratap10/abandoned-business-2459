import React from 'react'
import { Box, Container, Text, Button } from '@chakra-ui/react'

export default function FifthPart() {
    return (
        <div>
            <Container className="fifthCont" style={{
               
            }}>
                <Text className="fifth_text">Sign up for free</Text>
                <div style={{ display: "flex", marginLeft: "40%", gap: "10px" }}>
                    <Box >
                        <Button className="fifth">Start for Free</Button>
                    </Box>
                    <Button className="fifth_btn">talk to sales</Button>
                    <Box>
                    </Box>
                </div>
            </Container>
        </div>
    )
}
