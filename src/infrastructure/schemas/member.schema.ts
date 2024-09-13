import { model, Schema } from "mongoose";

interface IMember {
    _id: string;
    fullname: string;
    email: string;
    phone?: string;
}

const memberSchema = new Schema<IMember>({
    _id: { type: String },
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
});

const MemberModel = model<IMember>("Member", memberSchema);

export { IMember, MemberModel };