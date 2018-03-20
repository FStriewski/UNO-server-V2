import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch
} from 'routing-controllers'

import  Cards  from './entity'
// import {IsBoard, isValidTransition, calculateWinner, finished} from './logic'
// import { Validate } from 'class-validator'
import { io } from '../index'


@JsonController()
export default class CardsController {

    @Authorized()
    @Get('/cards')
    getCards() {
        return Cards.find()
    }
    

}