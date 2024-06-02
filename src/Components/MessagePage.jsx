import { Container, Paper } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

const MessagePage = () => {
  let params = useParams();
  const { messageText } = params;
  console.log(messageText);
  // return ;
  return <Container>
    <Paper sx={{padding: "3rem 3.5rem", minHeight: "90vh !important", background: "rgb(227, 184, 146)"}}>
      <div dangerouslySetInnerHTML={{ __html: atob(messageText) }} />
    </Paper>
  </Container>;
}

export default MessagePage;
