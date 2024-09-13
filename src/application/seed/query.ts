interface IQuery<TFeedBack> {
    queryId: string;
    result: TFeedBack | null;
}

export default IQuery;