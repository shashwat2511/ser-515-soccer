import { Box } from '@mui/system'
import React from 'react'

function Home() {
    return (
        <Box className="homePage" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontWeight: "bold",
            color: '#999999',
        }}>
            Home Page
        </Box>
    )
}

export default Home
