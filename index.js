import inquirer from "inquirer";
import renameImages from "./src/renameImages.js";
import { getNames } from "./src/writeData.js";

inquirer.prompt([
    {
        type: 'string',
        name: 'nameFile',
        message: 'Insert the path of file with code names: '
    },
    {
        type: 'string',
        name: 'pathDestiny',
        message: 'Insert the path of images to be renamed: '
    },
])
    .then((answers) => {
        const { nameFile, pathDestiny } = answers
        if (nameFile && pathDestiny) {
            const names = getNames(nameFile)
            renameImages(pathDestiny, names)
        } else {
            console.log('Enter the .json file and the path of images to be renamed')
        }
    })
    .catch((err) => {
        console.log('error on get info ', err)
    })



