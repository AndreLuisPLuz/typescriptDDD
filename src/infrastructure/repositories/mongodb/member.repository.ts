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
        const entityExists = (await MemberModel.exists({ _id: entity.id }) != null);

        const document = entityExists
            ? await MemberModel.findOneAndUpdate({ _id: entity.id }, entity).exec()
            : (await MemberModel.create())[0];
        
        if (document == null)
            return null;

        const member = this.loadFromDocument(document);
        return member;
    }

    private loadFromDocument(document: HydratedDocument<IMember>): Member {
        return new Member(
            document._id.toString(),
            document.fullname,
            document.email
        );
    };
}

export default MongoMemberRepository;