import { injected } from "brandi";
import { GetMemberDetails } from "../queries/getMemberDetails";
import { INFRA_TOKENS } from "../../infrastructure/container";

import IMemberRepository from "../../domain/aggregates/member/contracts/memberRepository";
import IQueryHandler from "../seed/queryHandler";

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

injected(MemberQueryHandler, INFRA_TOKENS.memberRepository);

export default MemberQueryHandler;