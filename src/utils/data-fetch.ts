import { ResponseSchema } from './types';

export const getSkipRecords = async (): Promise<ResponseSchema> => {
  try {
    const response = await fetch(
      'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft',
      { method: 'GET' }
    );
    if (response.status === 200) {
      const data = await response.json();
      return { status: response.status, data };
    }
    return {
      status: response.status,
      data: { message: 'failed to retrieve records' },
    };
  } catch (error: unknown) {
    const err = error as Error;
    return {
      status: 500,
      data: { message: err.message },
    };
  }
};
