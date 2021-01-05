import React, { useState } from "react"
import LNavbar from "./LNavbar"
import TNavbar from "./TNavbar"
import {Row,Col, Container, Table,Button,Form,Image} from "react-bootstrap"
import Popup from "./Popup"
import axios from "axios"

function Main(){

      const [BaslikMenu,SetBaslikMenu] = useState(false)

      const [ResimMenu,SetResimMenu] = useState(false)


      const [Resim,SetResim] = useState({
            selectedFile: null
      })

      function OpenBaslikMenu(){
            SetBaslikMenu(true)
      }
      function CloseBaslikMenu(e){
            if(e.target.className === "popup" ||  e.target.className === "popup-exit-icon"){
                  SetBaslikMenu(false)
            }
      }


      function OpenResimMenu(){
            SetResimMenu(true)
      }
      function CloseResimMenu(e){
            if(e.target.className === "popup" ||  e.target.className === "popup-exit-icon"){
                  SetResimMenu(false)
            }
      }

      function fileSeletectedHandle(event){
            SetResim({selectedFile:event.target.files[0]})
      }

      function fileUploadHandle(event){
            event.preventDefault()
            const fd = new FormData()
            fd.append("image",Resim.selectedFile,Resim.selectedFile.name)
            axios.post("http://localhost:4000/file",fd,{
                  onUploadProgress: ProgressEvent =>{
                        console.log("Upload Progress: " + Math.round(ProgressEvent.loaded / ProgressEvent.total) * 100 + "")
                  }
            }).then(res=>{
                  console.log(res)
            })
      }


      return(
            <Row className="dashboard">
                  <Col className="l-navbar" xs={2} style={{padding:"0px"}}>
                        <LNavbar/>
                  </Col>
                  <Col style={{padding:"0px",backgroundColor:"#181924"}}>
                        <TNavbar>DashBoard</TNavbar>
                        <Container>
                        <h1 className="my-5 text-center text-light">AnaSayfa</h1>
                        <Table striped bordered hover variant="dark">
                              <thead>
                              <tr>
                                    <th></th>
                                    <th></th>
                                    <th className="text-center">İşlemler</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                    <td className="text-center">Başlık</td>
                                    <td className="text-center">Ömer Harikadır</td>
                                    <td><Button onClick={OpenBaslikMenu} style={{margin:"0 auto",display:"block"}}>Islem</Button></td>
                              </tr>
                              <tr>
                                    <td className="text-center">Resim</td>
                                    <td className="text-center">İmg</td>
                                    <td><Button onClick={OpenResimMenu} style={{margin:"0 auto",display:"block"}}>Islem</Button></td>
                              </tr>
                              </tbody>
                        </Table>
                        </Container>
                        {BaslikMenu && <Popup close={CloseBaslikMenu}>
                              <Form className="text-light">
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Başlık</Form.Label>
                                    <Form.Control type="text" placeholder="Başlık" name="baslik" autocomplete="off"/>
                                    <Form.Text className="text-muted">
                                          Başlığı Giriniz
                                    </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                    Submit
                                    </Button>
                              </Form>
                        </Popup>}
                        {ResimMenu && <Popup close={CloseResimMenu}>
                              <Form className="text-light" onSubmit={fileUploadHandle}>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Resim</Form.Label>
                                    <Image src="./profil.png" style={{width:"100px",display:"block",margin:"0px 0px 15px 0px"}}/>
                                    <Form.Control type="file" placeholder="Resim" name="Resim" onChange={fileSeletectedHandle}/>
                                    <Form.Text className="text-muted">
                                          Resim Seçiniz
                                    </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                    Submit
                                    </Button>
                              </Form>
                        </Popup>}
                  </Col>
            </Row>
      )
}


export default Main