import { Container, token } from "brandi";
import MemberCommandHandler from "../../application/handlers/memberCommandHandler";
import MemberQueryHandler from "../../application/handlers/memberQueryHandler";

const TOKENS = {
    memberCommandHandler: token<MemberCommandHandler>("memberCommandHandler"),
    memberQueryHandler: token<MemberQueryHandler>("memberQueryHandler"),
};

const container = new Container();

container.bind(TOKENS.memberCommandHandler)
    .toInstance(MemberCommandHandler)
    .inSingletonScope();

container.bind(TOKENS.memberQueryHandler)
    .toInstance(MemberQueryHandler)
    .inSingletonScope();

export { TOKENS, container };