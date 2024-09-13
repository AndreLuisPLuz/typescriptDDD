import { injected } from "brandi";
import IMemberRepository from "../../domain/aggregates/member/contracts/memberRepository";
import CreateMember from "../commands/createMember";
import ICommandHandler from "../seed/commandHandler";
import { TOKENS } from "../seed/container";
import Member from "../../domain/aggregates/member/member";

class MemberHandler implements ICommandHandler<CreateMember> {
    private repo: IMemberRepository;

    constructor(repo: IMemberRepository) {
        this.repo = repo;
    }

    handle(command: CreateMember): void {
        const newMember = Member.createEntity(
            command.fullname,
            command.email,
            command.phone
        );

        this.repo.upsertAsync(newMember);
    }
}

injected(MemberHandler, TOKENS.memberRepository);

export default MemberHandler;