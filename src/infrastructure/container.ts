import { Container, token } from "brandi";
import IMemberRepository from "../domain/aggregates/member/contracts/memberRepository";
import MongoMemberRepository from "./repositories/mongodb/member.repository";

const INFRA_TOKENS = {
    memberRepository: token<IMemberRepository>("memberRepository"),
}

const infrastructureContainer = new Container();

infrastructureContainer.bind(INFRA_TOKENS.memberRepository)
    .toInstance(() => new MongoMemberRepository())
    .inResolutionScope();

export { INFRA_TOKENS, infrastructureContainer };