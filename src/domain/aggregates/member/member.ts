import Entity from "../../seed/entity";

class Member extends Entity {
    public fullname: string;
    public email: string;
    public phone?: string;

    constructor(id: string, fullname: string, email: string) {
        super(id);

        this.fullname = fullname;
        this.email = email;
    }
}

export default Member;