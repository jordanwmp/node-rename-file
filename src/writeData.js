import fs from 'fs'

const writeData = (object) => {
    try {
        const jsonString = JSON.stringify(object)
        fs.writeFileSync('data.json', jsonString)
    } catch (error) {
        console.log('error on write data ', error)
    }
}

const readData = (object) => {
    try {
        const data = fs.readFileSync(object, 'utf8')
        return data
    } catch (error) {
        console.log('error on read data', error)
    }
}

const getNames = (data) =>{
    const info = readData(data)
    const obj = JSON.parse(info)
    return Object.values(obj)
}

export {
    writeData,
    readData,
    getNames
}