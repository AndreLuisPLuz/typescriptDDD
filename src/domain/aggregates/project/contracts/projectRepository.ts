import IRepository from "../../../seed/repository";
import Project from "../project";

interface IProjectRepository extends IRepository<Project> { }

export default IProjectRepository;