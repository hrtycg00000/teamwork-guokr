const getMetaContent = () => {
    return JSON.parse($(`[name=guokrStringify]`).attr(`content`)) ;
}


class Num{
    constructor (){
        return Num.instance || this.init();
    }
    init (){
        if( !Num.instance ){
            Num.instance = new NumInstance();
        }
    }
}

class NumInstance{
    constructor (){
        if ( !this.num ) {
            this.init();
        }
        return this.num;
    }
    init (){
        return this.num = 1;
    }
    add (){
        return ++this.num ;
    }
}

class Allpress{
    constructor (){
        return Allpress.instance || this.init();
    }
    init (){
        if( !Allpress.instance ){
            Allpress.instance = new AllpressInstance();
        }
        return Allpress.instance
    }
}

class AllpressInstance{
    constructor (){
        return this.press ;
    }
    resetPress (){
        return this.press = [];
    }
    addPress (newPressList){
        return this.press=this.press.concat(newPressList);
    }
    getPressList (){
        return this.press;
    }
    getPressDetail(id){
        return this.press.filter(t => {
            return Number(t.id) === Number(id);
        })[0];
    }
}

module.exports = { getMetaContent, Num, Allpress };