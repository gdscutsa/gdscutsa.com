async function apiCall(
  space: string,
  token: string,
  query: string,
  variables?: string
) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  };
  return await fetch(fetchUrl, options);
}

export async function getUpcomingEvents(space: string, token: string) {
  const query = `
  {
    eventCollection(order: date_DESC, where: {endDate_gte: "${new Date().toISOString()}"}) {
      items {
        name
        location
        date
        desc 
        image {
          description
          url
        }
        eventLink
      }
    }
  
}`;
  const response = await apiCall(space, token, query);
  const json: any = await response.json();
  const formattedData = await json.data.eventCollection.items.map(
    async (project: {
      name: string;
      location: string;
      date: any;
      desc: any;
      image: any;
      eventLink: string;
      isPast: boolean;
    }) => {
      const { name, location, date, desc, image, eventLink, isPast } = project;
      return {
        name,
        location,
        date,
        desc,
        img: image.url,
        imgAlt: image.description,
        eventLink,
        isPast,
      };
    }
  );
  return Promise.all(formattedData);
}

export async function getPastEvents(space: string, token: string) {
  const query = `
  {
    eventCollection(order: date_DESC, where: {endDate_lt: "${new Date().toISOString()}"}) {
      items {
        name
        location
        date
        desc 
        image {
          description
          url
        }
        eventLink
      }
    }
  
}`;
  const response = await apiCall(space, token, query);
  const json: any = await response.json();
  const formattedData = await json.data.eventCollection.items.map(
    async (project: {
      name: string;
      location: string;
      date: any;
      desc: any;
      image: any;
      eventLink: string;
      isPast: boolean;
    }) => {
      const { name, location, date, desc, image, eventLink, isPast } = project;
      return {
        name,
        location,
        date,
        desc,
        img: image.url,
        imgAlt: image.description,
        eventLink,
        isPast,
      };
    }
  );
  return Promise.all(formattedData);
}

export type EventType = {
  name: string;
  slug: string;
  location: string;
  date: Date;
  endDate: Date;
  desc: string;
  eventLink: string;
  isPast: boolean;
};

export async function getEventBySlug(
  space: string,
  token: string,
  slug: string
): Promise<EventType[]> {
  const query = `
  {
    
    eventCollection(where: {slug: "${slug}", endDate_gte: "${new Date().toISOString()}"}) {
      items {
          name
          location
          date
          endDate
          desc 
          eventLink
        }
    }
  }`;

  const response = await apiCall(space, token, query);
  const json: any = await response.json();
  const formattedData = await json.data.eventCollection.items.map(
    async (project: {
      name: string;
      location: string;
      date: any;
      endDate: any;
      desc: any;
      eventLink: string;
    }) => {
      const { name, location, date, endDate, desc, eventLink } = project;
      return {
        name,
        location,
        date: new Date(date),
        endDate: new Date(endDate),
        desc,
        eventLink,
      };
    }
  );
  return Promise.all(formattedData);
}

export const client = { getUpcomingEvents, getPastEvents, getEventBySlug };
