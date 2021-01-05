const express = require("express")
const app = express()
const cors = require('cors')
const fileUpload = require("express-fileupload")

app.use(fileUpload())
app.use(cors())


app.post("/file",(req,res)=>{

      console.log(req.files)
  
      if(req.files === null){
            return res.status(400).json({msg:"No file uploaded"})
      }
      const file = req.files.image

      file.mv(`${__dirname}/../client/public/profil.png`,err=>{
            if(err){
                  console.error(err)
                  return res.status(500).json({msg:"hata"})
            }
            else{
                  res.json({fileName:file.name})
            }
      })

})


app.listen(4000,function(){
  console.log("Server strated")
})