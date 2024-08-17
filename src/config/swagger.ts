import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API TypeScript | Node.js | Express',
            version: '1.0.0'
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
        .swagger-ui .topbar .topbar-wrapper {
            display: block;
        }
        .topbar-wrapper .link {
            content: url('https://media.licdn.com/dms/image/C5112AQF49DOfOhCFSA/article-cover_image-shrink_720_1280/0/1579816811751?e=2147483647&v=beta&t=e47GGJDzoqsm4dl3qV2EjVWrxyMzIwsPmEE9Gywo83w');
            height: 60px;
            width: auto;
            border-radius: 30px;
        }
        .swagger-ui .topbar {
            background-color: #fcfcfa;
        }
        .swagger-ui .info {
            margin: 20px
        }
    `,
    customSiteTitle: 'REST API Express | TypeScript DOCS'
}

export default swaggerSpec

export {
    swaggerUiOptions
}