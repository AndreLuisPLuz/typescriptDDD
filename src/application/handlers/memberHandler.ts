import { injected } from "brandi";
import { TOKENS } from "../seed/container";

import IMemberRepository from "../../domain/aggregates/member/contracts/memberRepository";
import ICommandHandler from "../seed/commandHandler";
import CreateMember from "../commands/createMember";
import Member from "../../domain/aggregates/member/member";

class MemberHandler implements ICommandHandler<CreateMember> {
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

        command.result = savedMember.id;
    }
}

injected(MemberHandler, TOKENS.memberRepository);

export default MemberHandler;