const {request, response} = require('express')

//All methods for User

const userGet = (req = request, res = response) => {
    const {nombre, edad, page = 1} = req.query

    res.status(200).json({
        msg: 'get',
        nombre,
        edad,
        page,
    })
}

const userPost = (req, res = response) => {
    const {nombre, edad} = req.body

    res.status(200).json({
        msg: 'post',
        nombre,
        edad
    })
}

const userPut = (req, res = response) => {
    const id = req.params.id

    res.status(200).json({
        msg: 'put',
        id
    })
}

const userDelete = (req, res = response) => {
    const id = req.params.id

    res.status(200).json({
        msg: 'delete',
        id
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
}