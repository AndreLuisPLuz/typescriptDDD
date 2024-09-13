import { injected } from "brandi";
import IMemberRepository from "../../domain/aggregates/member/contracts/memberRepository";
import { getMemberDetails } from "../queries/getMemberDetails";
import IQueryHandler from "../seed/queryHandler";
import { TOKENS } from "../seed/container";

class MemberQueryHandler implements IQueryHandler<getMemberDetails> {
    private repo: IMemberRepository;

    constructor(repo: IMemberRepository) {
        this.repo = repo;
    }

    async handleAsync(query: getMemberDetails): Promise<void> {
        const member = await this.repo.findByIdAsync(query.memberid);

        if (member == null) {
            query.result = null;
            return;
        }

        query.result = member;
    }
}

injected(MemberQueryHandler, TOKENS.memberRepository);

export default MemberQueryHandler;