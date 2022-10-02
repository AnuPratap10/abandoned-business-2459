import React from 'react'

import { Box, Container, Input, Text, Select, Stack, Image } from '@chakra-ui/react'

export default function FooterSec() {
    return (
        <div style={{ marginTop: "10%" }}>

            <Container style={{
                margin: "auto", display: "flex", justifyContent: "space-around"
            }}>
                <Box style={{ width: "25%" }}>
                    <h1  style={{
                        fontSize: "2.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(11, 53, 88)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}>Easy</h1>
                    <h1
                     style={{
                        fontSize: "2.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(0, 107, 255)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}
                    >ahead</h1>
                    <Text>We take the work out of connecting with others so you can accomplish more.</Text>


                    <select name="" id="" style={{
                        width: "100%", borderRadius: "10px", padding: "10px", borderColor: "gray",
                        marginTop: "40px"
                    }}>
                        <option value="">English</option>
                        <option value="">Francais</option>
                        <option value="">Espanol</option>
                        <option value="">Deutsch</option>
                        <option value="">Portugues</option>
                    </select>


                </Box>
                <Box style={{ width: "25%" }}>
                    <h3 
                     style={{
                        fontSize: "1.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(11, 53, 88)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}
                    >About</h3>
                    <Text>About Calendly</Text>
                    <Text>Contact Sales</Text>
                    <Text>Newsroom</Text>
                    <Text>Careers</Text>
                    <Text>Security</Text>



                </Box>
                <Box style={{ width: "25%" }}>
                    <h3  style={{
                        fontSize: "1.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(11, 53, 88)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}>Solution</h3>
                    <Text>Customer Sucecess</Text>
                    <Text>Sales</Text>
                    <Text>Recruiting</Text>
                    <Text>Information</Text>
                    <Text>Technology</Text>
                    <Text>Marketing</Text>
                </Box>
                <Box>
                    <h3  style={{
                        fontSize: "1.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(11, 53, 88)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}>Popular Features</h3>
                    <Text>Embed Calendly</Text>
                    <Text>Availability</Text>
                    <Text>Sending Notifications</Text>
                    <Text>Using Calendly Mobile</Text>
                </Box>
            </Container>

            <Container style={{
                margin: "auto", display: "flex", justifyContent: "space-around"
            }}>
                <Box style={{ width: "25%" }}>
                    <Image src="https://logowik.com/content/uploads/images/download-on-the-app-store4659.jpg"
                        width="130px"
                    />
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png?20220907104002"
                        width="100px"
                    />
                    <Box style={{ gap: "20", display: "flex", justifyContent: "space-evenly" }}>
                        <Image src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png" width="20px" />
                        <Image src="https://cdn-icons-png.flaticon.com/128/20/20837.png" width="20px" />
                        <Image src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" width="20px" />
                        <Image src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" width="20px" />
                        <Image src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" width="20px" />


                    </Box>
                    <br />
                    <br />
                    <p>Copyright Calendly 2022</p>

                </Box>


                <Box style={{ width: "25%" }}>
                    <h3  
                     style={{
                        fontSize: "1.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(11, 53, 88)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}
                    >Support</h3>
                    <Text>Help Center</Text>
                    <Text>Video Tutorials</Text>
                    <Text>Cookie Setting</Text>
                </Box>
                <Box style={{ width: "25%" }}>
                    <h3  style={{
                        fontSize: "1.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(11, 53, 88)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}>Add-Ons</h3>
                    <Text>Download for Chrome</Text>
                    <Text>Download for Firefox</Text>

                </Box>
                <Box >
                    <h3  style={{
                        fontSize: "1.50875rem",
                        lineHeight: "1.2",
                        fontWeight: "600",
                        color: "rgb(11, 53, 88)",
                        marginBottom: "15px",
                        marginRight: "5px",
                      }}>Devlopers</h3>
                    <Text>Developer Tools</Text>
                    <br /><br /><br /><br /><br />
                    <p>Privacy/Terms and Conditions</p>
                    <br />
                </Box>

            </Container>



        </div>
    )
}
{/* <a href=""></a> */}