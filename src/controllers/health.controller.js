function healthCheck (req, res) {
    return res.status(200).json({
        "health": "I'm Alive",
        "status": 200,
        "message": "Ok",
    })
}

module.exports = {
    healthCheck
}