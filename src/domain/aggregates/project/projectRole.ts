enum Role {
    LEADER,
    COLLABORATOR
}

class ProjectRole {
    public role: Role;
    public canEditProject: boolean;

    public constructor(role: Role) {
        this.role = role;
        this.canEditProject = (role == Role.LEADER);
    }
}

export { Role, ProjectRole };