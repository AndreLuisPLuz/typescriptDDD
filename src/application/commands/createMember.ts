import { v4 as uuid } from "uuid";
import ICommand from "../seed/command";

class CreateMember implements ICommand<string | null>
{
    public commandId: string;
    public fullname: string;
    public email: string;
    public phone?: string;
    public result: string | null =  null;

    public constructor(
            fullname: string,
            email: string,
            phone: string | undefined = undefined
    ) {
        this.commandId = uuid();
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
    }
}

export default CreateMember;