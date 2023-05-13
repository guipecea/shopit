const products = [
    {
        id: '1',
        name: 'Samsung 22',
        price: 10000,
        category: 'cellphones',
        img: 'https://fdn.gsmarena.com/imgroot/news/22/02/samsung-galaxy-s22-hot-take/inline/-1200/gsmarena_007.jpg',
        stock: 25,
        description: 'Descripcion del Samsung 22'
    },
    {
        id: '2',
        name: 'Samsung 9',
        price: 8000,
        category: 'cellphones',
        img: 'https://fdn.gsmarena.com/imgroot/news/22/02/samsung-galaxy-s22-hot-take/inline/-1200/gsmarena_007.jpg',
        stock: 25,
        description: 'Descripcion del Samsung 21'
    },
    {
        id: '3',
        name: 'Iphone 13',
        price: 18000,
        category: 'cellphones',
        img: 'https://fdn.gsmarena.com/imgroot/news/22/02/samsung-galaxy-s22-hot-take/inline/-1200/gsmarena_007.jpg',
        stock: 25,
        description: 'Descripcion del Iphone 13'
    },
    {
        id: '4',
        name: 'Motorola Sb22',
        price: 25000,
        category: 'cellphones',
        img: 'https://fdn.gsmarena.com/imgroot/news/22/02/samsung-galaxy-s22-hot-take/inline/-1200/gsmarena_007.jpg',
        stock: 25,
        description: 'Descripcion del Motorola Sb22'
    },
    {
        id: '5',
        name: 'Nokia 1100',
        price: 1000,
        category: 'cellphones',
        img: 'https://fdn.gsmarena.com/imgroot/news/22/02/samsung-galaxy-s22-hot-take/inline/-1200/gsmarena_007.jpg',
        stock: 2,
        description: 'Descripcion del Nokia 1100'
    }

]
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },500)
        // setTimeout(() => {
        //     reject("Ocurrio un error al obtener los productos")
        // },500)
    })
}