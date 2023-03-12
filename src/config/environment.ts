export const environment = {
    MONGOOSE_CONNECTION: process.env.MONGOOSE_CONNECTION || 'mongodb://admin:123456@localhost:27017',
    API_PORT: process.env.API_PORT || 3003
}