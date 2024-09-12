import Entity from "../../seed/entity";
import { ProjectRole, Role } from "./projectRole";

class ProjectMember extends Entity {
    public memberId: string;
    public projectRole: ProjectRole;

    public constructor(id: string, memberId: string, role: Role) {
        super(id);

        this.memberId = memberId;
        this.projectRole = new ProjectRole(role);
    }
}

export default ProjectMember;