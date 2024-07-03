import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next();
}

const pr = (req, res, next) =>{
  const url = req.url;
  if(url === "/pr"){
    return res.send("ggg");
  }
  console.log("hhhhh");
  next();
}

const handleHome = (req,res) => {
  return res.send("I still love you")
};


const handleerr = (req,res) => {
  return res.send("rrrrr")
};

app.use(logger);
app.use(pr)

app.get("/", handleHome);
app.get("/pr",handleerr);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);






