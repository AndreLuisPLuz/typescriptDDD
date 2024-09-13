import { HydratedDocument } from "mongoose";
import IMemberRepository from "../../../domain/aggregates/member/contracts/memberRepository";
import Member from "../../../domain/aggregates/member/member";
import { IMember, MemberModel } from "../../schemas/member.schema";

class MongoMemberRepository implements IMemberRepository {
    async existsAsync(id: string): Promise<boolean> {
        const document = await MemberModel.exists({ _id: id });
        return (document != null);
    }

    async findByIdAsync(id: string): Promise<Member | null> {
        const document = await MemberModel.findById(id).exec();

        if (document == null)
            return null;

        const member = this.loadFromDocument(document);
        return member;
    }

    async upsertAsync(entity: Member): Promise<Member | null> {
        const entityExists = (await MemberModel.exists({ _id: entity._id }) != null);

        const document = entityExists
            ? await MemberModel.findOneAndUpdate({ _id: entity._id }, entity).exec()
            : await MemberModel.create(entity);
        
        if (document == null)
            return null;

        const member = this.loadFromDocument(document);
        return member;
    }

    private loadFromDocument(document: HydratedDocument<IMember>): Member {
        return Member.loadEntity(
            document._id.toString(),
            document.fullname,
            document.email,
            document.phone
        )
    };
}

export default MongoMemberRepository;