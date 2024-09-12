import Entity from "../../seed/entity";

class TeamMember extends Entity {
    public memberId: string;

    public constructor(id: string, memberId: string)
    {
        super(id);
        this.memberId = memberId;
    }
}

export default TeamMember;