import "reflect-metadata"
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import "express-async-errors"
import swaggerUi from 'swagger-ui-express'

import { router } from './shared/infra/http/routes'

import { environment } from './config/environment'
import { ErrorHandler } from "./shared/errors/ErrorHandler"

import './shared/container'

import swaggerFile from './swagger.json'

mongoose.connect(environment.MONGOOSE_CONNECTION)

const api = express()
api.use(express.json())
api.use(cors({ origin: "*" }))

api.use(router)
api.use(ErrorHandler)
api.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

api.listen(environment.API_PORT, () => console.log(`Api running on port ${environment.API_PORT}`))