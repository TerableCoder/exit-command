module.exports = function ExitCommand(mod) {
    mod.command.add(['exit', 'quit'], () => {
        mod.toClient('S_EXIT', 3, { category: 0, code: 0 });
    });
}
