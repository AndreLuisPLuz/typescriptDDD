import IQuery from "../seed/query";
import { v4 as uuid } from "uuid";

type MemberDetails = {
    fullname: string;
    email: string;
    phone?: string;
}

class getMemberDetails implements IQuery<MemberDetails> {
    queryId: string;
    memberid: string;
    result: MemberDetails | null = null;

    constructor(memberId: string) {
        this.queryId = uuid();
        this.memberid = memberId;
    }
}

export { MemberDetails, getMemberDetails }