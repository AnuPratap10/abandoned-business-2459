import React from 'react'
import { Image, Container, Text, Box } from "@chakra-ui/react"
import Button from 'react-bootstrap/Button';
export default function SecPart() {
    return (
        <div>
            <div>
                <Container style={{ display: "flex", marginTop: "4%", }} >
                    <Box style={{ marginLeft: "5%", fontFamily: "-moz-initial" ,width:"700px",}}>
                        <h1 style={{ color: "rgb(0, 107, 255)", fontSize: "16px", lineHeight: 6.0,marginLeft:"-30%",fontWeight: 400,
                     }}> CALENDLY FEATURES</h1>

                        <p style={{ marginLeft:"-30px",
                            fontSize: "67px", marginTop: "-20px", lineHeight: 1.2,
                             fontWeight: 900, color: "rgb(11, 53, 88)",marginBottom: "32px",marginLeft:"-78px",
                           

                        }}>
                            Take the </p>
                        <p style={{ fontSize: "67px", lineHeight: 0.4,marginLeft:"50px",
                         fontWeight: 900, color: "rgb(11, 53, 88)",marginBottom: "32px", }}> hassle out of </p>
                        <p style={{ marginLeft:"23px", fontSize: "67px", color: "rgb(0, 107, 255)",
                         marginTop: "-30px", fontWeight: 900, marginBottom: "32px", lineHeight: 1.8,marginLeft:"-6px"}}>
                             scheduling</p>
                        <p style={{ fontSize: "20px", color: "#476788", 
                         marginTop: "-30px",marginLeft:"22px" }}
                        >Calendly helps you book better meetings, faster, <br />
                            by syncing and integrating everything in one <br />
                            intuitive platform.</p>

                        <Button variant="primary" style={{ color: "white", backgroundColor: "rgb(0, 107, 255)", border: "none", }} >Start for free</Button>
                    </Box>



                    <Box style={{ marginLeft: "-5%" ,marginTop:"10px"}}>

                        <Image src="https://images.ctfassets.net/k0lk9kiuza3o/4WmpJ9cnQjKzPgpH5Asq7k/882ab846dcaf7b4df6f6d5248f445897/Features-Hero-Image__1_.png?w=1431&h=1188&q=50&fm=webp"
                            width="65%"
                        />
                    </Box>


                </Container>
            </div>
        </div>
    )
}
