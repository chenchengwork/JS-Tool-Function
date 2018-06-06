/**
 * 将字符串转换成 Blob 对象
 * @param {String} str
 * @return {Blob}
 */
export const stringToBlob = (str) => new Blob([str], { type: 'text/plain' });

/**
 * 将TypeArray转换成 Blob 对象
 * @param {ArrayBufferTypes} typeArray
 * @return {Blob}
 */
export const typeArrayToBlob = (typeArray) => new Blob([typeArray], {type: "application/octet-binary"});

/**
 * ArrayBuffer转Blob
 * @param {ArrayBuffer} buffer
 * @return {Blob}
 */
export const arrayBufferToBlob = (buffer) => new Blob([buffer])

/**
 * 将Blod转成String
 * @param blob
 * @return {Promise<any>}
 */
export const blobToString = (blob) => new Promise((resolve, reject)=> {
    const reader = new FileReader();
    reader.readAsText(blob, 'utf-8');
    reader.onload = function (e) {
        resolve(reader.result);
    };

    reader.onerror = (e) => {
        reject(e);
    };
});


/**
 * 将Blod转成 ArrayBuffer
 * @param blob
 * @return {Promise<any>}
 */
export const blobToArrayBuffer = (blob) => new Promise((resolve, reject)=> {
    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.onload = function (e) {
        resolve(reader.result);
    };

    reader.onerror = (e) => {
        reject(e);
    };
});


/**
 * 网络图像文件转Base64
 * @param {Object} img对象
 * @return {string}
 */
export const getBase64Image = (img) => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    const dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}


/**
 * Base64字符串转二进制
 * @param {String} dataurl base64
 * @return {Blob}
 */
export const dataURLtoBlob = (dataurl) => {
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = window.atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {
        type: mime
    });
}

/**
 * 生成下载文件
 * @param {String} content 要写入下载文件中的内容
 * @param {Object} opts
 * @param {String} opts.fileName 下载文件的名称
 * @param {String} opts.linkDesc 下载文件的链接描述
 */
export const createDownloadFile = (content = "", opts = {}) => {
    const blob = new Blob([content]);

    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = opts.fileName;
    a.textContent = opts.linkDesc;

    document.querySelector('body').appendChild(a);
}

/**
 * 将大文件分段上传
 */
export const uploadChunkFile = () => {
    function upload(blobOrFile) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/server', true);
        xhr.onload = function(e) {  };
        xhr.send(blobOrFile);
    }

    document.querySelector('input[type="file"]').addEventListener('change', function(e) {
        const blob = this.files[0];

        const BYTES_PER_CHUNK = 1024 * 1024; // 1MB chunk sizes.
        const SIZE = blob.size;

        let start = 0;
        let end = BYTES_PER_CHUNK;

        while(start < SIZE) {
            upload(blob.slice(start, end));

            start = end;
            end = start + BYTES_PER_CHUNK;
        }
    }, false);
}

