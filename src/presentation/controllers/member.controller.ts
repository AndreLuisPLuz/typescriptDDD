import { Request, Response } from "express";
import { container, TOKENS } from "../seed/container";
import { GetMemberDetails } from "../../application/queries/getMemberDetails";
import CreateMember from "../../application/commands/createMember";

const commandHandler = container.get(TOKENS.memberCommandHandler);
const queryHandler = container.get(TOKENS.memberQueryHandler);

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