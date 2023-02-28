const fs = require ('fs')
const path = require ('path')
//
// const hm1 = 'hm_1';
// fs.mkdir(path.join(__dirname, hm1), (err)=>{
//     if (err) throw new Error(err.message)
// })

// const folderArr = [ 'folder_1', 'folder_2', 'folder_3', 'folder_4', 'folder_5']
//
// for (const folder of folderArr) {
//     fs.mkdir(path.join('hm_1', folder), (err) =>{
//         if (err) throw new Error(err.message)
//     })
// }

// const fileArr = [ 'file_1.txt', 'file_2.txt', 'file_3.txt', 'file_4.txt', 'file_5.txt']
//
// for (const file of fileArr) {
//     fs.writeFile(path.join('hm_1', file), 'Hello', (err) =>{
//         if (err) throw new Error(err.message)
//     })
// }

fs.readdir(path.join('hm_1'), {withFileTypes:true}, (err, data)=>{
    if (err) throw new Error(err.message);
    data.forEach(file =>{
        console.log(file.isFile())
    })
})