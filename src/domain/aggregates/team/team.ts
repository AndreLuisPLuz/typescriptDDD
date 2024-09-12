import Entity from "../../seed/entity";
import TeamMember from "./teamMember";

class Team extends Entity {
    public name: string;
    public members: TeamMember[];

    constructor (
            id: string,
            name: string,
            members: TeamMember[] = []
    ) {
        super(id);

        this.name = name;
        this.members = members;
    }

    public addNewMember = (newMember: TeamMember): void => {
        this.members.push(newMember);
    }
}

export default Team;