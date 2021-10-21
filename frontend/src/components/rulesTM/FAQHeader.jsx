
import { Box, Link, List, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import {FAQTopicsList } from "../../demoJSONs/faq"
const FAQHeader = ({ onTopicClick }) => {
    return (
       <Box mx={2} my={1}>
            <Typography variant="h5">Frequently Asked Questions</Typography>
            <Typography variant="body1">Select a topic category or scroll down to the page to find your question.</Typography>
            <Box m={1}>
            <List dense={true}>
                {FAQTopicsList.map( (topic,i) => <ListItem>
                     <Link component="button" href="#" onClick={()  => onTopicClick(topic,i)}  variant="body1" >{topic}
                     </Link> 
                     </ListItem>)}
                </List>
            </Box>
        </Box>
        
    )
}

export default FAQHeader
