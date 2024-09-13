import { Container, token } from "brandi";
import IMemberRepository from "../../domain/aggregates/member/contracts/memberRepository";
import MongoMemberRepository from "../../infrastructure/repositories/mongodb/member.repository";

const container = new Container();

const TOKENS = {
    memberRepository: token<IMemberRepository>("memberRepository"),
}

container.bind(TOKENS.memberRepository)
    .toInstance(MongoMemberRepository)
    .inResolutionScope();

export { container, TOKENS };