import React from 'react'
import { Text, Box, Container, Image } from '@chakra-ui/react'
import { NavLink } from 'react-bootstrap'


export default function ThirdPart() {

    return (
        <div>
            <div className="addition">
               
                    <div className="thrd">
                        <h3>INTRODUCING ANALYTICS</h3>
                        <Text fontSize='50px' className="thrdtext" >
                            Our latest addition
                        </Text>
                        <Text className="gQOtoQ">
                            Our new analytics dashboard surfaces activity and trends so you can <br /> optimize scheduling to hit your goals.
                        </Text>
                    </div>

                    <Container  style={{ display: "flex", marginTop: "4%", }}>
                    
                        <Box >
                            <h3>DATA-DRIVEN INSIGHTS</h3>
                            <h1>Analytics</h1>
                            <Text>Discover activity and trends — such as popular meeting <br />
                                days, top performers, in-demand meeting types, and <br /> more.</Text>

                            <NavLink to="/learn" style={{ color: "rgb(0, 107, 255)" }}>Learn more
                                <img src="https://cdn-icons-png.flaticon.com/128/3031/3031735.png"
                                    alt="" width="20px" /> </NavLink>
                        </Box>


                        <Box>
                            <Image src="https://images.ctfassets.net/k0lk9kiuza3o/3rLEehwNS0Kj9h1NOl1NFI/12e07302825a3dba741b417fcd7b45fa/Popular_days___users_with_most_events__6_.png?w=1471&h=1210&q=50&fm=webp"
                                width="50%"
                            />


                        </Box>
                         
                         <div></div>


                </Container>
            </div>
        </div>
    )
}
