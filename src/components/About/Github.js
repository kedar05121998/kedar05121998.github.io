import {Text, Flex ,Box,Image} from "@chakra-ui/react";
import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";





function Github() {
  return (
    <>
 
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="kedar05121998"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
    
    <Text  textAlign='center' fontSize={{base : '12px',md: '18px', lg : '20px'}} fontWeight={{base : '600', md : '600'}} mt={{base : '50px', md : '80px', lg :'55px'}} letterSpacing={{base : '3px'}}>GITHUB STATS</Text>
      <Flex  width={{base : '75%', md : '85%', lg  :'70%'}} m='auto' direction={{base : 'column-reverse', md : 'row'}} justifyContent='center' alignItems='center' mt={{base : '10px', md : '30px', lg : '50px'}} gap={{base : '15px', md : '35px', lg : '70px'}}>
        <Box>
            <a href="https://github.com/kedar05121998">
                    <Image width={{base : '250px', md : '480px', lg : '500px'}} src={`https://github-readme-streak-stats.herokuapp.com/?user=kedar05121998`}/>
                </a>
        </Box>

        <Box>
        <a href="https://github.com/kedar05121998">
                <Image width={{base : '300px', md : '490px', lg : '500px'}} src={`https://github-readme-stats.vercel.app/api?username=kedar05121998&count_private=true&`}/>
            </a>
        </Box>
      </Flex>

     <Flex  w={{base : '70%', md : '80%', lg :'30%'}}  m='auto' mt={{base : '15px', md :'25px'}} justifyContent='center' alignItems='center'> 
        <Box>
            <a href="https://github.com/kedar05121998">
                <Image width={{base : '250px', md : '260px', lg : '350px'}} src={`https://github-readme-stats.vercel.app/api/top-langs/?username=kedar05121998`}/>
            </a>
        </Box>
     </Flex>
   
    
    </>
);
}

export default Github;
