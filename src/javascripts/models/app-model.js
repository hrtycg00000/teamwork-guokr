const getMetaContent = () => {
    return JSON.parse($(`[name=guokrStringify]`).attr(`content`)) ;
}


class Num{
    constructor(){
        return Num.instance || this.init();
    }
    init(){
        if( !Num.instance ){
            Num.instance = new NumInstance();
        }
    }
}

class NumInstance{
    constructor(){
        if ( !this.num ) {
            this.init();
        }
        return this.num;
    }
    init(){
        return this.num = 1;
    }
    add(){
        return ++this.num ;
    }
}

module.exports = { getMetaContent, Num };