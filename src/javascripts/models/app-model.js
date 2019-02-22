const getMetaContent = () => {
    return JSON.parse($(`[name=guokrStringify]`).attr(`content`)) ;
}


class Num{
    constructor(){
        return Num.instance ||  new NumInstance();
    }
}

class NumInstance{
    constructor(){
        this.init();
        return this.num ;
    }
    init(){
        return this.num = 0;
    }
    add(){
        return ++this.num ;
    }
}

module.exports = { getMetaContent, Num };