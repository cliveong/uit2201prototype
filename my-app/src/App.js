import './App.css';
import './index.css'
import bgImage from './data/campus-background-3.jpg'
import sampleModList from './data/modlist.json'
import sampleModData from './data/modData.json'
import React, { Component, useState, useEffect } from 'react'
import Select, {components} from 'react-select'
import {TableHead,TableRow,Table, TableBody, TableContainer, TableCell} from "@material-ui/core";
import { makeStyles, IconButton , Typography, Container, Grid, Box, Paper} from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const selectStyles = { 
  menu: styles => ({ ...styles, zIndex: 999}),    
};

const options = sampleModList["list"]
const sampleModDataList = sampleModData["list"]

const MultiValue = props => (
  <components.MultiValue {...props}>
    {props.data.chiplabel}
  </components.MultiValue>
);

function App() {
  const [intro, setIntroText] = useState(true)
  const [userSelectedMods, setUserSelectedMods] = useState([]);
  const [cs2030sExpanded, setcs2030sExpanded] = useState(false)
  const [cs2040sExpanded, setcs2040sExpanded] = useState(false)
  const [cs2100Expanded, setcs2100Expanded] = useState(false)
  const [cs2103tExpanded, setcs2103tExpanded] = useState(false)
  const [cs2105Expanded, setcs2105Expanded] = useState(false)
  const [darken, setDarken]= useState(0);
  const [showMods, setShowMods] = useState({
    CS2030S: false,
    CS2040S: false,
    CS2100: false,
    CS2103T: false,
    CS2105: false,
  })

  useEffect(() => {
    if (userSelectedMods.length > 0) {
      setIntroText(false);
      setDarken(0.5)
    } else {
      setDarken(0)
      setcs2030sExpanded(false)
      setcs2040sExpanded(false)
      setcs2100Expanded(false)
      setcs2103tExpanded(false)
      setcs2105Expanded(false)
      setIntroText(true);
    }
    activateTables()
  }, [userSelectedMods])

  function onClick(a,b) {
    if (a) {
      b(false)
      return (
        <ExpandMoreIcon />
      )
    } else {
      b(true)
      return (
        <ExpandLessIcon />
      )
    }
  }
  function generateCS2030S() {
      for (let i = 0; i < userSelectedMods.length; i++) {
        for (let j = 0; j < sampleModDataList.length; j++) {
          if(userSelectedMods[i].value == sampleModDataList[j].value & userSelectedMods[i].value == "CS2030S") {
            return (
            <TableContainer component = {Paper} style = {{width: "80vw", "table-layout":"fixed", 'margin':"auto"}} size = 'medium'>
              <Table style = {{width: "80vw", "table-layout":"fixed"}} size = 'medium'>
                <TableHead style = {{height: "3em"}}> 
                  <TableRow align = "left">
                    <TableCell colSpan={3}>                      
                      <IconButton aria-label="delete" align = "right"  variant="outlined" onClick={() => onClick(cs2030sExpanded, setcs2030sExpanded)} >
                        {cs2030sExpanded ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>  
                      <a href="https://nusmods.com/modules/CS2030S/programming-methodology-ii" target="_blank" style = {{fontSize: "1.5em", fontWeight: "bold"}}>{userSelectedMods[i].label}</a> 
                    </TableCell>
                  </TableRow>
                </TableHead>
                
                <TableHead  style = {{height: "3em"}}> 
                  <TableRow align = "left">
                    <TableCell colSpan={3} style = {{fontSize: "1.5em", fontWeight: "bold"}}><div style = {{paddingLeft: "2em"}}>Language(s): <a href="https://download.java.net/java/GA/jdk14/docs/api/index.html" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language}</a></div></TableCell>
                  </TableRow>
                </TableHead>
                {cs2030sExpanded?
                  <React.Fragment>
                    <TableRow>
                      <TableCell>Semester</TableCell>
                      <TableCell align="left">Professor(s)</TableCell>
                      <TableCell align="left">Language(s)</TableCell>
                    </TableRow>
                    <TableBody>
                      {sampleModDataList[j].entries.map((row) => (
                        <TableRow
                          key={row.value}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.semester}
                          </TableCell>
                          <TableCell align="left">{row.professor}</TableCell>
                          <TableCell align="left">{row.language}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </React.Fragment> :null}
              </Table>
            </TableContainer>
          )
        }
      }
    }
  }

  function generateCS2040S() {
    for (let i = 0; i < userSelectedMods.length; i++) {
      for (let j = 0; j < sampleModDataList.length; j++) {
        if(userSelectedMods[i].value == sampleModDataList[j].value & userSelectedMods[i].value == "CS2040S") {
          return (
          <TableContainer component = {Paper} style = {{width: "80vw", "table-layout":"fixed", 'margin':"auto"}} size = 'medium'>
            <Table style = {{width: "80vw", "table-layout":"fixed"}} size = 'medium'>
              <TableHead style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3}>                      
                    <IconButton aria-label="delete" align = "right"  variant="outlined" onClick={() => onClick(cs2040sExpanded, setcs2040sExpanded)} >
                      {cs2040sExpanded ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>  
                    <a href="https://nusmods.com/modules/CS2040S/data-structures-and-algorithms" target="_blank" style = {{fontSize: "1.5em", fontWeight: "bold"}}>{userSelectedMods[i].label}</a> 
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead  style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3} style = {{fontSize: "1.5em", fontWeight: "bold"}}><div style = {{paddingLeft: "2em"}}>Language(s): <a href="https://download.java.net/java/GA/jdk14/docs/api/index.html" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language}</a></div></TableCell>
                </TableRow>
              </TableHead>
              {cs2040sExpanded? <React.Fragment>
              <TableRow>
                <TableCell>Semester</TableCell>
                <TableCell align="left">Professor(s)</TableCell>
                <TableCell align="left">Language(s)</TableCell>
              </TableRow>
              <TableBody>
                {sampleModDataList[j].entries.map((row) => (
                  <TableRow
                    key={row.value}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.semester}
                    </TableCell>
                    <TableCell align="left">{row.professor}</TableCell>
                    <TableCell align="left">{row.language}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </React.Fragment>: null}
            </Table>
          </TableContainer>
        )
      }
    }
  }
  }

  function generateCS2100() {
    for (let i = 0; i < userSelectedMods.length; i++) {
      for (let j = 0; j < sampleModDataList.length; j++) {
        if(userSelectedMods[i].value == sampleModDataList[j].value & userSelectedMods[i].value == "CS2100") {
          return (
          <TableContainer component = {Paper} style = {{width: "80vw", "table-layout":"fixed", 'margin':"auto"}} size = 'medium'>
            <Table style = {{width: "80vw", "table-layout":"fixed"}} size = 'medium'>
              <TableHead style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3}>                      
                    <IconButton aria-label="delete" align = "right"  variant="outlined" onClick={() => onClick(cs2100Expanded, setcs2100Expanded)} >
                      {cs2100Expanded ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>  
                    <a href="https://nusmods.com/modules/CS2100/computer-organisation" target="_blank" style = {{fontSize: "1.5em", fontWeight: "bold"}}>{userSelectedMods[i].label}</a> 
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead  style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3} style = {{fontSize: "1.5em", fontWeight: "bold"}}>
                    <div style = {{paddingLeft: "2em"}}>Language(s): 
                      <a href="https://www.dsi.unive.it/~gasparetto/materials/MIPS_Instruction_Set.pdf" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language[0]}, </a>
                      <a href="https://docs.microsoft.com/en-us/cpp/c-language/?view=msvc-170" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language[1]}</a>
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              {cs2100Expanded? <React.Fragment>
              <TableRow>
                <TableCell>Semester</TableCell>
                <TableCell align="left">Professor(s)</TableCell>
                <TableCell align="left">Language(s)</TableCell>
              </TableRow>
              <TableBody>
                {sampleModDataList[j].entries.map((row) => (
                  <TableRow
                    key={row.value}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.semester}
                    </TableCell>
                    <TableCell align="left">{row.professor}</TableCell>
                    <TableCell align="left">{row.language[0]}, {row.language[1]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </React.Fragment>: null }
            </Table>
          </TableContainer>
        )
      }
    }
  }
  }

  function generateCS2103T() {
    for (let i = 0; i < userSelectedMods.length; i++) {
      for (let j = 0; j < sampleModDataList.length; j++) {
        if(userSelectedMods[i].value == sampleModDataList[j].value & userSelectedMods[i].value == "CS2103T") {
          return (
          <TableContainer component = {Paper} style = {{width: "80vw", "table-layout":"fixed", 'margin':"auto"}} size = 'medium'>
            <Table style = {{width: "80vw", "table-layout":"fixed"}} size = 'medium'>
              <TableHead style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3}>                      
                    <IconButton aria-label="delete" align = "right"  variant="outlined" onClick={() => onClick(cs2103tExpanded, setcs2103tExpanded)} >
                      {cs2103tExpanded ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>  
                    <a href="https://nusmods.com/modules/CS2103T/software-engineering" target="_blank" style = {{fontSize: "1.5em", fontWeight: "bold"}}>{userSelectedMods[i].label}</a> 
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead  style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3} style = {{fontSize: "1.5em", fontWeight: "bold"}}><div style = {{paddingLeft: "2em"}}>Language(s): <a href="https://download.java.net/java/GA/jdk14/docs/api/index.html" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language[0]}</a></div></TableCell>
                </TableRow>
              </TableHead>
              {cs2103tExpanded? <React.Fragment>
              <TableRow>
                <TableCell>Semester</TableCell>
                <TableCell align="left">Professor(s)</TableCell>
                <TableCell align="left">Language(s)</TableCell>
              </TableRow>
              <TableBody>
                {sampleModDataList[j].entries.map((row) => (
                  <TableRow
                    key={row.value}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.semester}
                    </TableCell>
                    <TableCell align="left">{row.professor}</TableCell>
                    <TableCell align="left">{row.language}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </React.Fragment>:null}
            </Table>
          </TableContainer>
        )
      }
    }
  }
  }

  function generateCS2105() {
    for (let i = 0; i < userSelectedMods.length; i++) {
      for (let j = 0; j < sampleModDataList.length; j++) {
        if(userSelectedMods[i].value == sampleModDataList[j].value & userSelectedMods[i].value == "CS2105") {
          return (
          <TableContainer component = {Paper} style = {{width: "80vw", "table-layout":"fixed", 'margin':"auto"}} size = 'medium'>
            <Table style = {{width: "80vw", "table-layout":"fixed"}} size = 'medium'>
              <TableHead style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3}>                      
                    <IconButton aria-label="delete" align = "right"  variant="outlined" onClick={() => onClick(cs2105Expanded, setcs2105Expanded)} >
                      {cs2105Expanded ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>  
                    <a href="https://nusmods.com/modules/CS2103T/software-engineering" target="_blank" style = {{fontSize: "1.5em", fontWeight: "bold"}}>{userSelectedMods[i].label}</a> 
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead  style = {{height: "3em"}}> 
                <TableRow align = "left">
                  <TableCell colSpan={3} style = {{fontSize: "1.5em", fontWeight: "bold"}}>
                    <div style = {{paddingLeft: "2em"}}>Language(s): 
                      <a href="https://download.java.net/java/GA/jdk14/docs/api/index.html" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language[0]}, </a>
                      <a href="https://docs.python.org/3/" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language[1]}, </a>
                      <a href="https://docs.microsoft.com/en-us/cpp/c-language/?view=msvc-170" target="_blank" style = {{fontSize: "1em", fontWeight: "bold"}}>{sampleModDataList[j].language[2]}</a>

                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              {cs2105Expanded? <React.Fragment>
              <TableRow>
                <TableCell>Semester</TableCell>
                <TableCell align="left">Professor(s)</TableCell>
                <TableCell align="left">Language(s)</TableCell>
              </TableRow>
              <TableBody>
                {sampleModDataList[j].entries.map((row) => (
                  <TableRow
                    key={row.value}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.semester}
                    </TableCell>
                    <TableCell align="left">{row.professor}</TableCell>
                    <TableCell align="left">{row.language[0]}, {row.language[1]}, {row.language[2]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </React.Fragment>:null}
            </Table>
          </TableContainer>
        )
      }
    }
  }
  }
  
  function generate() {
    for (let i = 0; i < userSelectedMods.length; i++) {
      for (let j = 0; j < sampleModDataList.length; j++) {
        console.log(userSelectedMods[i].value)
        console.log(sampleModDataList[j].value)
        if(userSelectedMods[i].value == sampleModDataList[j].value) {
          return (
            
            <TableContainer component = {Paper} style = {{width: "80vw", "table-layout":"fixed", 'margin':"auto"}} size = 'medium'>
              <Table style = {{width: "80vw", "table-layout":"fixed"}} size = 'medium'>
                <TableRow style = {{border: '1px solid'}}>
                  <TableHead> 
                  <a href="https://nusmods.com/modules/CS2030S/programming-methodology-ii" target="_blank">{userSelectedMods[i].label}</a>
                  </TableHead>
                </TableRow>
                <TableRow style = {{border: '1px solid'}}>
                  <TableHead>{sampleModDataList[j].language}</TableHead>
                </TableRow>
                <TableRow>
                  <TableCell>Semester</TableCell>
                  <TableCell align="left">Professor(s)</TableCell>
                  <TableCell align="left">Language(s)</TableCell>
                </TableRow>
                <TableBody>
                  {sampleModDataList[j].entries.map((row) => (
                    <TableRow
                      key={row.value}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.semester}
                      </TableCell>
                      <TableCell align="left">{row.professor}</TableCell>
                      <TableCell align="left">{row.language}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        }
      }
    }
  }

  function activateTables() {
    setShowMods({...showMods, CS2030S:false})
    setShowMods({...showMods, CS2040S:false})
    setShowMods({...showMods, CS2100:false})
    setShowMods({...showMods, CS2103T:false})
    setShowMods({...showMods, CS2105:false})

    for(let i = 0; i < userSelectedMods.length; i++) {
      if(userSelectedMods[i].value == "CS2030S") {
        setShowMods({...showMods, CS2030S:true})
      }
      if(userSelectedMods[i].value == "CS2040S") {
        setShowMods({...showMods, CS2040S:true})
      }
      if(userSelectedMods[i].value == "CS2100") {
        setShowMods({...showMods, CS2100:true})
      }
      if(userSelectedMods[i].value == "CS2103T") {
        setShowMods({...showMods, CS2103T:true})
      }
      if(userSelectedMods[i].value == "CS2105") {
        setShowMods({...showMods, CS2105:true})
      }
    }
  }

  return (
    <div className="App" style={{ 
      //background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
      backgroundImage: `url(${bgImage})` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      minHeight: "100vh",
      backgroundAttachment: 'fixed'
      //filter background colour if time permits
    }}>

    <div class="layer" style = {{backgroundColor: `rgba(0, 0, 0, ${darken})`,  minHeight: "100vh" }}>

    { intro ? <div style={{font: 'Roboto Mono', justifyContent:'center', alignItems:'center', fontSize: '10vw',textShadow: '3px 3px black', color:'#FFFFFF', paddingTop: '10%'}}>CSModLanguage</div> : null}


    <div style={{ 
      justifyContent:'center', alignItems:'center', width: '70vw', margin: 'auto', paddingTop: '3%'
    }}>
                        
      <Select 
        styles={selectStyles}
        isMulti
        options={options}
        isSearchable
        placeholder = "Type to search module codes, try CS2040S"
        onChange = {setUserSelectedMods}
        isClearable
        components={{ MultiValue }}
        />
    </div>
    <br></br>
    <>
      {showMods.CS2030S ?  generateCS2030S() : null}
    </>
    <br></br>
    <>
      {showMods.CS2040S ?  generateCS2040S() : null}
    </>
    <br></br>
    <>
      {showMods.CS2100?  generateCS2100() : null}
    </>
    <br></br>
    <>
      {showMods.CS2103T ?  generateCS2103T() : null}
    </>
    <br></br>
    <>
      {showMods.CS2105 ?  generateCS2105() : null}
    </>
    <br></br>

    </div>
    </div>
  );
}

export default App;
