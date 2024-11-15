import {Column, Entity, PrimaryGeneratedColumn, VersionColumn} from "typeorm";

@Entity({name:'kubovia'})
export class Kubotest {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying", { name: "username"})
    username: string;

    @Column("character varying", { name: "email"})
    email: string;

    @Column("timestamp without time zone", { name: "modif_date", nullable: true })
    modifDate: Date | null;

    @VersionColumn()
    version: number;
}