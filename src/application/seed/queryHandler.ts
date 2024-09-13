import IQuery from "./query";

interface IQueryHandler<TQuery extends IQuery<any>> {
    handleAsync(query: TQuery): Promise<void>;
}

export default IQueryHandler;