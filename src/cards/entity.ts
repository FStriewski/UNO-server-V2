import { BaseEntity, JoinColumn, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import {Game, Player} from '../games/entities'


@Entity()
export default class Deck extends BaseEntity {

    // Should have n:1 to game and ?n:1 to player?
    @PrimaryGeneratedColumn()
    id?: number

    @Column('json', { nullable: false })
    carddeck: string

    // @Column('int', { nullable: true })
    // value: number

    // @Column('int', { length: 1, nullable: true })
    // plus: number

    // @Column('text', { nullable: false })
    // location: Location

    // FS add:
    @OneToOne(_ => Game)
    game: Game

    @OneToMany(_ => Player, player => player.cards)
    player: Player[]

}