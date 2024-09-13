import { injected } from "brandi";

import IMemberRepository from "../../domain/aggregates/member/contracts/memberRepository";
import ICommandHandler from "../seed/commandHandler";
import CreateMember from "../commands/createMember";
import Member from "../../domain/aggregates/member/member";
import { INFRA_TOKENS } from "../../infrastructure/container";

class MemberCommandHandler implements ICommandHandler<CreateMember> {
    private repo: IMemberRepository;

    constructor(repo: IMemberRepository) {
        this.repo = repo;
    }

    async handleAsync(command: CreateMember): Promise<void> {
        const newMember = Member.createEntity(
            command.fullname,
            command.email,
            command.phone
        );

        const savedMember = await this.repo.upsertAsync(newMember);
        
        if (savedMember == null) {
            command.result = null;
            return;
        }

        command.result = savedMember._id;
    }
}

injected(MemberCommandHandler, INFRA_TOKENS.memberRepository);

export default MemberCommandHandler;