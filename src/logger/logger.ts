import { workspace } from "coc.nvim";

export enum LogLevel {
	Info = 0,
	Warn,
	Err,
}

const LEVEL: LogLevel = LogLevel.Warn;

function LogToString(level: LogLevel): String {
	switch (level) {
		case LogLevel.Info: {
			return "more";
		}
		case LogLevel.Warn: {
			return "warning";
		}
		case LogLevel.Err: {
			return "error";
		}
		default: {
			return "undefined";
		}
	}
}

export const LOG = (level: LogLevel, message: string) => {
	if (level >= LEVEL) {
		workspace.showMessage(`coc-cord: ${message}`, LogToString(level));
	}
};
