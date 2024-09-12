import { model, Schema } from "mongoose";

interface IMember {
    fullname: string;
    email: string;
    phone?: string;
}

const memberSchema = new Schema<IMember>({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
});

const MemberModel = model<IMember>("Member", memberSchema);

export { IMember, MemberModel };