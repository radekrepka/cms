import {DateTime} from 'luxon';

export const getReadableDateTime = (dateTimeISO: string | null): string => {
	if (dateTimeISO == null) return "";

	return DateTime.fromISO(dateTimeISO).toFormat("d. M. yyyy HH:mm");
};
