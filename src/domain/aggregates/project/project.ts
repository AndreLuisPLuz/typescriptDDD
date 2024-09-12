import Entity from "../../seed/entity";
import ProjectMember from "./projectMember";
import { ProjectStatus, Status } from "./projectStatus";

class Project extends Entity {
    public name: string;
    public status: ProjectStatus;
    public members: ProjectMember[];
    public teamId: string;

    public constructor(
            id: string,
            name: string,
            status: Status = Status.NOT_STARTED,
            teamId: string,
            members: ProjectMember[] = []) {
        super(id);

        this.name = name;
        this.status = new ProjectStatus(status);
        this.teamId = teamId;
        this.members = members;
    }
}

export default Project;