import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public readonly name: string;
    public readonly email: string;
    public readonly password: string;

    // Recendo todos as props de user com exceção ao id e recendo id como opcional
    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props); // Mesma coisa que this.name = props.name...

        if (!id) {
            this.id = uuid()
        }
    }
}