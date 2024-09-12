import Entity from "./entity";

interface IRepository<TEntity extends Entity> {
    existsAsync(id: string): Promise<boolean>;
    findByIdAsync(id: string): Promise<TEntity | null>;
    upsertAsync(entity: TEntity): Promise<TEntity | null>;
}

export default IRepository;