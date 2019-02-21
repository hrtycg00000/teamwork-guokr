const api = {
    request ({
        url, data, methods,success
    }) {
        return $.ajax({
            url: `/guokr` + url,
            data: data || {},
            methods: methods || `get`, 
            success: (res) => {
                return res;
            },
            error: (error) => console.log(`请求出错了${error}`),
        })
    }

}

module.exports = api;