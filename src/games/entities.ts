import { BaseEntity, JoinColumn, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne, OneToOne } from 'typeorm'
import User from '../users/entity'
import Deck from '../cards/entity'

// export type Symbol = 'x' | 'o'
// export type Row = [ Symbol | null, Symbol | null, Symbol | null ]
 //export type Cards = [null]
//const CardsDefault: Cards = [null]

type Status = 'pending' | 'started' | 'finished'
//type Location = 'Deck' | 'CurrentCard' | 'Player1Hand' | 'Player2Hand' | 'Player3Hand' | 'Player4Hand'
//type Color = 'yellow' | 'red' | 'green' | 'blue' | 'black'

// const emptyRow: Row = [null, null, null]
// const emptyBoard: Board = [ emptyRow, emptyRow, emptyRow ]


@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  // @Column()
  // cards: Cards

  @Column()
  turn: String

  @Column()
  winner: String

  @Column('text', {default: 'pending'})
  status: Status

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, {eager:true})
  players: Player[]

  @OneToOne(_ => Deck, { eager: true })
  @JoinColumn()
  cards: Deck

}

@Entity()
 // @Index(['game', 'user', 'symbol'], { unique: true })
@Index(['game', 'user', 'cards'], {unique:true})
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  // @Column()
  // userId: number

  @Column()
  username: string    // Could be enum [player1,player2]

    // FS add:
    @ManyToOne(_ => Deck, cards => cards.player)
    cards: Deck
}




