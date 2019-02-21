const getMetaContent = () => {
    return JSON.parse($(`[name=guokrStringify]`).attr(`content`)) ;
}

module.exports = { getMetaContent };