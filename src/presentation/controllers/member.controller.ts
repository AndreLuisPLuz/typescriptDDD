import CreateMember from "../../application/commands/createMember";

import { Request, Response } from "express";
import { GetMemberDetails } from "../../application/queries/getMemberDetails";
import { APP_TOKENS, applicationContainer } from "../../application/container";

const commandHandler = applicationContainer.get(APP_TOKENS.memberCommandHandler);
const queryHandler = applicationContainer.get(APP_TOKENS.memberQueryHandler);

const createMemberController = async (req: Request, res: Response): Promise<Response> => {
    const { fullname, email, phone } = req.body;

    const command = new CreateMember(fullname, email, phone);
    await commandHandler.handleAsync(command);

    const newMemberId = command.result;

    if (!newMemberId) 
        return res.status(400).json({ message: "Member creation failed" });

    const query = new GetMemberDetails(newMemberId);
    await queryHandler.handleAsync(query);

    const savedMember = query.result;

    return res.status(201).json(savedMember);
};

export { createMemberController };