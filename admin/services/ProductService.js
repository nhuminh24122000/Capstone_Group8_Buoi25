function ProductService() {
    this.getProductList = function() {
        return axios({
            method: 'get',
            url: 'https://6408811a8ee73db92e42a343.mockapi.io/PhoneStore_Group8'
        })

    }

    this.addProductSer = function(product) {
        return axios({
            method: 'post',
            url: 'https://6408811a8ee73db92e42a343.mockapi.io/PhoneStore_Group8',
            data: product
        })
    }

    this.deleteProductSer = function(id) {
        return axios({
            method: 'delete',
            url: `https://6408811a8ee73db92e42a343.mockapi.io/PhoneStore_Group8/${id}`,
        })
    }


    this.getProductItem = function(id) {
        return axios({
            method: 'get',
            url: `https://6408811a8ee73db92e42a343.mockapi.io/PhoneStore_Group8/${id}`,
        })
    }

    this.updateProductSer = function(productUpdate,id) {
        return axios({
            method: 'put',
            url: `https://6408811a8ee73db92e42a343.mockapi.io/PhoneStore_Group8/${id}`,
            data: productUpdate
        })
    }
}