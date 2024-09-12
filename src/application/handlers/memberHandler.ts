import CreateMember from "../commands/createMember";
import ICommandHandler from "../seed/commandHandler";

class MemberHandler implements ICommandHandler<CreateMember> {
    private repo: MemberHandler

    handle(command: CreateMember): void {
        throw new Error("Method not implemented.");
    }
}