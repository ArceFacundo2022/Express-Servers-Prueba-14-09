const ctrlAdmin = {}

ctrlAdmin.getAdmin = (req, res) => {
    res.send({
        "menssaje":`Bienvenido de nuevo Admin`
    })
}

ctrlAdmin.postAdmin = (req, res) => {
    const {day, routine, time} = req.body;
    res.send({
        "menssaje":`Feliz ${day} :) hoy toca: ${routine} durante: ${time}`
    })
}

ctrlAdmin.putAdmin = (req, res) => {
    res.send({
        "menssaje" : ` ¡¡RESPUESTA AL PUT!! ` 
    })
}

ctrlAdmin.deleteAdmin = (req, res) => {
    const {Num1, Num2} = req.body;
    let num = [10,232,345,40,52,600,76,833,119]
    res.send({ "Numeros":`${num[Num1]} - ${num[Num2]}`

    })
}

module.exports = ctrlAdmin;