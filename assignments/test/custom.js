
// const fileSelector = document.getElementById('filetag');

// function getImage(e) {
//     const display = document.getElementById("preview");
    
//     let fileList = e.target.files[0];
        
//     let files = {};
//     let index = 0;
//     for (let file of files) {
//         files[index] = file;
//         index++;
//     }

//     // Now iterate object instead of array
//     Object.keys(files).forEach(key => {

//         let reader = new FileReader();

//         reader.readAsDataURL(fileList)

//         reader.onload = function (e) {
//             display.setAttribute('src', e.target.result)  
//         }
//         // reader.addEventListener("load", () => {
//         //     localStorage.setItem(`img${key}`, reader.result)
//         // })
//         // reader.readAsDataURL(files[key]);

//     });
// }

/*
<input type="file" onchange="getImage(event)" />
<img id="img" src="" />
*/



function getImage(e) {
    const file = e.target.files[0]
    const imgElem = document.getElementById('img')
    
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (e) {
        console.log(e.target.result)
        localStorage.setItem("img", JSON.stringify(e.target.result))
        // imgElem.setAttribute('src', e.target.result)
    }
}

