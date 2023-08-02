const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
app.use('/static',express.static('public'));
var docxConverter = require('docx-pdf');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , "templates/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

app.post('/convert', upload.single('docx'), (req, res, next) => {
    console.log(req.file);
 
      const result = docxConverter(req.file.path,`public/${req.file.filename}.pdf`,(err,result) =>{
        if(err){
           console.log(err);
          }
         console.log(result);
        });
 
          const myTimeout = setTimeout(myFile, 3000);

          function myFile() {
            res.redirect(`http://localhost:3000/static/${req.file.filename}.pdf`)
          }


    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })