import { getLogger, LogContext } from '@balena/jellyfish-logger';
import { setTimeout } from 'timers/promises';

const logger = getLogger(__filename);

export const bootstrap = async (logContext: LogContext, options: any) => {
	logger.info(logContext, 'Bootstrapping', options);
	await setTimeout(Math.random() * 5000);
	logger.info(logContext, 'Started', options);

	return {
		close: async () => {
			await setTimeout(2000);
		},
	};
};
