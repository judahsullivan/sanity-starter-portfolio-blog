interface SanityBody {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _updatedAt?: string;
}

interface HomePageLoad extends SanityBody {
  title: string;
  heading: string;
  role: string[]
  description: string;
  image: string;
}


interface PageLoad extends SanityBody {
  title: string;
  heading: string;
  description: string;
  image?: string;
}


interface PageLinks extends SanityBody {
  _id: string;
  _type: string;
  title: string;
}

interface ExternalLinks extends SanityBody {
  _id: string;
  _type: string;
  title: string;
}

interface SettingsPayload extends SanityBody {
  pageLinks: PageLinks[];
  image: string;
}
