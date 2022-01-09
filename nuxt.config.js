export default {
    dev: process.env.NODE_ENV !== 'production',
    publicRuntimeConfig: {
        baseURL: process.env.BASE_URL || 'https://kaitypetrainer.com'
    },
    head: {
        title: 'Kai Type Trainer',
        meta: [
            {
                charset: 'utf-8'
            }
        ]
    },
    loading: {
        color: '#fff'
    },
    srcDir: 'client/',
    pageTransition: 'page'
}