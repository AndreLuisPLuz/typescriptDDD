class Entity {
    private _id: string;

    public get id() { return this._id };

    constructor(id: string)
    {
        this._id = id
    }
}

export default Entity;