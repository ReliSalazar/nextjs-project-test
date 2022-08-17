function index(req, res) {
  return res.status(200).json({
    users: [{ name: "Reli" }, { name: "Danna" }],
  });
}

export default index;
