const db = require('./db');



const addalien = (name, tech) => {
    return db.Alien.findOne({
        name
    }).then(user => {
        // console.log(user)
        if (user) {
            return {
                status: false,
                statusCode: 422,
                message: "user already exist."
            }
        }
        else {
            const newAlien = new db.Alien({
                name,
                tech

            });
            newAlien.save();
            return {
                status: true,
                statusCode: 200,
                message: "successfully added"

            }
        }
    })


}


const getalien = (name) => {
    return db.Alien.findOne({
        name
    }).then(user => {
        // console.log(user)
        if (user) {
            return {
                status: true,
                statusCode: 200,
                name: user.name,
                tech: user.tech

            }
        }
        else {
            return {
                status: false,
                statusCode: 422,
                message: "user doesnt exist."
            }
        }
    })
}

const patchalien = (name, tech1) => {
    return db.Alien.findOne({
        name
    }).then(user => {
        // console.log(user)
        if (user) {

            user.tech = tech1;
            user.save();
            return {
                status: true,
                statusCode: 200,
                name: user.name,
                tech: user.tech,
                message: "successfully saved"


            }
        }
        else {
            return {
                status: false,
                statusCode: 422,
                message: "user doesnt exist."
            }

        }
    })
}


const deletealien = (name) => {
    return db.Alien.findOne({
        name
    }).then(user => {
        // console.log(user)
        if (user) {
            user.delete();
            return {
                status: true,
                statusCode: 200,
                message: "successfully deleted"


            }
        }
        else {
            return {
                status: false,
                statusCode: 422,
                message: "user doesnt exist."
            }

        }
    })
}

module.exports = {
    addalien,
    getalien,
    patchalien,
    deletealien
}