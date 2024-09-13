import { injected } from "brandi";
import IMemberRepository from "../../domain/aggregates/member/contracts/memberRepository";
import { GetMemberDetails } from "../queries/getMemberDetails";
import IQueryHandler from "../seed/queryHandler";
import { TOKENS } from "../seed/container";

class MemberQueryHandler implements IQueryHandler<GetMemberDetails> {
    private repo: IMemberRepository;

    constructor(repo: IMemberRepository) {
        this.repo = repo;
    }

    async handleAsync(query: GetMemberDetails): Promise<void> {
        const member = await this.repo.findByIdAsync(query.memberid);
        query.result = member;
    }
}

injected(MemberQueryHandler, TOKENS.memberRepository);

export default MemberQueryHandler;