import React from 'react'
import { Container, Box, Image, Text ,Button} from '@chakra-ui/react'


export default function ForthPart() {
    return (
        <div style={{ marginTop: "8%" }}>
            <Container style={{ marginTop: "7%", display: "flex" }}>

                <Box>
                    <Text style={{
                        marginLeft: "30px",
                        fontSize: "3.125rem",
                        lineHeight: "1.2",
                        textAlign: "left",
                        color: "rgb(29, 52, 75)",
                        fontWeight: "700",
                        marginBottom: "24px",
                        marginTop: "20%"
                    }}
                    >Integrations and Extensions</Text>

                    <Text style={{
                        width: "100 %",
                        lineHeight: "1.71429",
                        height: "auto",
                        paddingBottom: "32px",
                    }}
                    >Boost productivity with integrations that fold right into your workflow.</Text>
                    <Button className='explore'>Explore integration</Button>
                </Box>

                <Box>
                    <Image src="https://images.ctfassets.net/k0lk9kiuza3o/7pnp3ZIJHHNMJEYXSCktL/b04ce26084a30501984a14a2058efa36/Integrations-Calendly__1_.png?w=1582&h=1283&q=50&fm=webp"
                        width="70%"
                    />
                </Box>

            </Container>
        </div >
    )
}
