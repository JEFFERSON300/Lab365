
const authMiddle = (req,res,next) => {
    console.log(req.body.post)
    if (req.body.post !== "líder") {
        return res.status(406).json({ message: "Usuário não é líder" });
    }
    next()
};

module.exports = authMiddle;