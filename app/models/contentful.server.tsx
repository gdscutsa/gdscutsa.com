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
    eventCollection(order: date_DESC, where: {isPast: false}) {
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
    eventCollection(order: date_DESC, where: {isPast: true}) {
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

export const client = { getUpcomingEvents, getPastEvents };
