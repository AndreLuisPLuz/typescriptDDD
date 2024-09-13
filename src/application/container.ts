import { Container, token } from "brandi";
import { infrastructureContainer } from "../infrastructure/container";

import MemberCommandHandler from "./handlers/memberCommandHandler";
import MemberQueryHandler from "./handlers/memberQueryHandler";

const APP_TOKENS = {
    memberCommandHandler: token<MemberCommandHandler>("memberCommandHandler"),
    memberQueryHandler: token<MemberQueryHandler>("memberQueryHandler"),
};

const applicationContainer = new Container().extend(infrastructureContainer);

applicationContainer.bind(APP_TOKENS.memberCommandHandler)
    .toInstance(MemberCommandHandler)
    .inSingletonScope();

applicationContainer.bind(APP_TOKENS.memberQueryHandler)
    .toInstance(MemberQueryHandler)
    .inSingletonScope();

export { APP_TOKENS, applicationContainer };