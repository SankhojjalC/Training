const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
  const body = req.body;
  if (req.method === "POST" && req.url === "/addToCart") {
    res.json({
      responseMessage: "Product added to cart successfully",
      response: "Success",
    });
  } else if (req.method === "POST" && req.url === "/login") {
    res.json({
      message: "User Login Successful",
      response: "Success",
    });
  } else if (req.method === "POST" && req.url === "/register") {
    res.json({
      message: "User Creation Successful",
      response: "Success",
    });
  } else {
    //Not a post request. Let db.json handle it
    next();
  }
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
