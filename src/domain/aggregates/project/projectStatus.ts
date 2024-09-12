enum Status {
    NOT_STARTED,
    ONGOING,
    ON_HOLD,
    ORPHANED,
    FINISHED,
    DECEASED
}

class ProjectStatus {
    public status: Status;
    public allowsNewEvents: boolean

    public constructor(status: Status) {
        this.status = status
        this.allowsNewEvents = (status == Status.ONGOING);
    }
}

export { Status, ProjectStatus };