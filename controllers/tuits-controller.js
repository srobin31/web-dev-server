import posts from "./tuits.js";
let tuits = posts;

const findAllTuits = (req, res) => {
  res.json(tuits);
};

const createTuit = (req, res) => {
  const newTuit = req.body;
  Object.assign(newTuit, {
      _id: new Date().getTime() + "",
      postedBy: {
        username: "WebDev",
      },
      verified: false,
      handle: "WebDev",
      time: "Now",
      logoImage: "images/me.jpg",
      avatarImage: "images/me.jpg",
      comments: 0,
      retuits: 0,
      likes: 0,
      dislikes: 0
  })
  tuits.push(newTuit);
  res.json(newTuit);
};

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
};

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map((t) => (t._id === tuitdIdToUpdate ? updatedTuit : t));
  res.sendStatus(200);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
