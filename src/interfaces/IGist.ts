import IOwner from "./IOwner";

interface IGist {
  url: string;
  html_url: string;
  id: string;
  description: string;
  forks_url: string;
  created_at: string;
  updated_at: string;
  owner?: IOwner;
  files: any;
}

export default IGist;
