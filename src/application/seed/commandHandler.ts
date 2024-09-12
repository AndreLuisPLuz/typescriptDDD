import ICommand from "./command";

interface ICommandHandler<TCommand extends ICommand> {
    handle(command: TCommand): void;
}

export default ICommandHandler;