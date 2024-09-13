import Entity from "../../seed/entity";
import { v4 as uuid } from "uuid";

class Member extends Entity {
    public fullname: string;
    public email: string;
    public phone?: string;

    private constructor(id: string, fullname: string, email: string) {
        super(id);

        this.fullname = fullname;
        this.email = email;
    }

    public static createEntity = (fullname: string, email: string, phone?: string): Member => {
        // Validation and business rules would go here...

        const entity = new Member(uuid(), fullname, email);
        entity.phone = phone;

        return entity;
    };

    public static loadEntity = (id: string, fullname: string, email: string, phone?: string): Member => {
        const entity = new Member(id, fullname, email);
        entity.phone = phone;

        return entity;
    };
}

export default Member;