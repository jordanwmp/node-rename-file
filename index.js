const fs = require('fs')
const { names } = require('./names');

const allNames = names()
const PATH = `C:\\workspace\\virtual-tech\\EDUCATION\\geography-summary-app\\src\\assets\\images\\`


const renameImages = () => {
    fs
        .readdirSync(PATH)
        .filter((file) => {
            return file.endsWith('.jpg')
        })
        .map((file, index) => {
            try {
                console.log('file', file)
                fs.rename(`${PATH}${file}`, `${PATH}${allNames[index]}.jpg`, () => {
                    console.log('name replaced')
                })
            } catch (error) {
                console.log('error on rename ', error)
            }
        })

}

renameImages()